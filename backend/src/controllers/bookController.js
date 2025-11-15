import fs from "fs";
import path from "path";
import multer from "multer";
import sharp from "sharp";
import { fileURLToPath } from "url";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
} from "../models/bookModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..", "..");
const uploadDir = process.env.UPLOAD_DIR
  ? path.join(projectRoot, process.env.UPLOAD_DIR)
  : path.join(projectRoot, "src", "uploads");
const photoDir = process.env.PHOTO_DIR
  ? path.join(projectRoot, process.env.PHOTO_DIR)
  : path.join(projectRoot, "src", "photo");

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});

function fileFilter(req, file, cb) {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed"), false);
  }
  cb(null, true);
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

async function processImage(file) {
  if (!file) return null;
  const outputPath = path.join(photoDir, file.filename);
  await sharp(file.path)
    .resize(600, 800, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .toFile(outputPath);

  try {
    fs.unlinkSync(file.path);
  } catch (e) {
    console.warn("Could not remove temp upload:", e.message);
  }
  const publicUrl = `/photo/${file.filename}`;
  return publicUrl;
}

export async function listBooks(req, res, next) {
  try {
    const { q, category_id, status, limit, offset } = req.query;
    if (q || category_id || status || limit || offset) {
      const books = await searchBooks({
        query: q || null,
        category_id: category_id ? Number(category_id) : null,
        status: status || null,
        limit: limit ? Number(limit) : 50,
        offset: offset ? Number(offset) : 0,
      });
      return res.json(books);
    }
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    next(err);
  }
}

export async function getBook(req, res, next) {
  try {
    const book = await getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    next(err);
  }
}

export async function createBookHandler(req, res, next) {
  try {
    const { title, description, price, quantity, status, author_id, category_id } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    let image_url = null;
    if (req.file) {
      image_url = await processImage(req.file);
    }

    const numericPrice = price !== undefined ? Number(price) : undefined;
    const numericQuantity = quantity !== undefined ? Number(quantity) : undefined;

    const book = await createBook({
      title,
      description,
      price: isNaN(numericPrice) ? undefined : numericPrice,
      quantity: isNaN(numericQuantity) ? undefined : numericQuantity,
      status,
      image_url,
      author_id: author_id ? Number(author_id) : null,
      category_id: category_id ? Number(category_id) : null,
    });
    // fetch full book with joined author_name and category_name
    const fullBook = await getBookById(book.id);
    res.status(201).json(fullBook);
  } catch (err) {
    next(err);
  }
}

export async function updateBookHandler(req, res, next) {
  try {
    const { title, description, price, quantity, status, author_id, category_id } = req.body;

    let image_url;
    if (req.file) {
      image_url = await processImage(req.file);
    }

    const numericPrice = price !== undefined ? Number(price) : undefined;
    const numericQuantity = quantity !== undefined ? Number(quantity) : undefined;

    const book = await updateBook(req.params.id, {
      title,
      description,
      price: isNaN(numericPrice) ? undefined : numericPrice,
      quantity: isNaN(numericQuantity) ? undefined : numericQuantity,
      status,
      image_url,
      author_id: author_id ? Number(author_id) : null,
      category_id: category_id ? Number(category_id) : null,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // fetch full book with joined author_name and category_name
    const fullBook = await getBookById(book.id);
    res.json(fullBook);
  } catch (err) {
    next(err);
  }
}

export async function deleteBookHandler(req, res, next) {
  try {
    await deleteBook(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
