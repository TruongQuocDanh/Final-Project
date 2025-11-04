import Book from "../models/book.model.js";
import { Op } from "sequelize";
import multer from "multer";
import path from "path";

// Multer storage (US1 AC3, AC4, AC11-AC13 validate)
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB (US1 AC13)
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") return cb(null, true);
    return cb(new Error("Only JPG or PNG allowed")); // (US1 AC9)
  }
});

// Create Book (US1)
export const createBook = async (req, res) => {
  try {
    const { title, author, category, price, quantity, description, publisher } = req.body;
    if (!title || !author || !category) {
      // (US1 AC5)
      return res.status(400).json({ message: "Please enter required fields: title, author, category." });
    }
    if (isNaN(price) || Number(price) <= 0) {
      // (US1 AC7)
      return res.status(400).json({ message: "Price must be greater than 0." });
    }
    if (quantity !== undefined && Number(quantity) < 0) {
      // (US1 AC8)
      return res.status(400).json({ message: "Quantity cannot be negative." });
    }

    const exists = await Book.findOne({ where: { title } });
    if (exists) {
      // (US1 AC16)
      return res.status(409).json({ message: "This book already exists in the system." });
    }

    const newBook = await Book.create({
      title, author, category, price, quantity, description, publisher,
      cover_image: req.file ? `/uploads/${req.file.filename}` : null
    });

    // (US1 AC18/AC19) returning new entity
    return res.status(201).json({ message: "Book added successfully.", data: newBook });
  } catch (err) {
    // (US1 AC17)
    return res.status(500).json({ message: "Unable to save data. Please try again later.", error: err.message });
  }
};

// List Books with pagination & sorting (US2)
export const listBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = "date_added", order = "DESC" } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { rows, count } = await Book.findAndCountAll({
      offset,
      limit: Number(limit),
      order: [[sortBy, order]],
    });

    // (US2 AC8)
    if (count === 0)
      return res.json({ message: "No books available.", data: [], total: 0 });

    const totalPages = Math.ceil(count / Number(limit));
    const remainingPages = Math.max(totalPages - Number(page), 0);

    return res.json({
      data: rows,
      total: count,
      page: Number(page),
      pages: totalPages,
      remainingPages, // 👈 thêm dòng này
    });
  } catch (err) {
    // (US2 AC12)
    return res.status(500).json({
      message: "Could not load the product list. Please try again later.",
      error: err.message,
    });
  }
};

// Get Book detail (US3)
export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      // (US3 AC4)
      return res.status(404).json({ message: "Book not found." });
    }
    return res.json(book);
  } catch (err) {
    // (US3 AC7)
    return res.status(500).json({ message: "Unable to load book details. Please try again.", error: err.message });
  }
};

// Search by title or author, case-insensitive, partial (US18)
export const searchBooks = async (req, res) => {
  try {
    const { q = "" } = req.query;
    const where = {
      [Op.or]: [
        { title: { [Op.iLike]: '%' + q + '%' } },
        { author: { [Op.iLike]: '%' + q + '%' } }
      ]
    };
    const results = await Book.findAll({ where, limit: 50 });
    if (results.length === 0) {
      // (US18 AC8)
      return res.json({ message: "No results found for '" + q + "'." , data: []});
    }
    return res.json({ data: results });
  } catch (err) {
    // (US18 AC10)
    return res.status(500).json({ message: "An error occurred while searching. Please try again later.", error: err.message });
  }
};

// Filter by category and/or price range (US19)
export const filterBooks = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const where = {};
    if (category) where.category = category;
    if (minPrice || maxPrice) {
      const min = Number(minPrice ?? 0);
      const max = Number(maxPrice ?? Number.MAX_SAFE_INTEGER);
      if (min > max) {
        // (US19 AC5)
        return res.status(400).json({ message: "Minimum price cannot be greater than maximum price." });
      }
      where.price = { [Op.between]: [min, max] };
    }

    const results = await Book.findAll({ where, limit: 100 });
    if (results.length === 0) {
      // (US19 AC9)
      return res.json({ message: "No products match the current filters.", data: [] });
    }
    return res.json({ data: results, count: results.length });
  } catch (err) {
    return res.status(500).json({ message: "Filter error", error: err.message });
  }
};
