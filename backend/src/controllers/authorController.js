import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../models/authorModel.js";

export async function listAuthors(req, res, next) {
  try {
    const authors = await getAllAuthors();
    res.json(authors);
  } catch (err) {
    next(err);
  }
}

export async function getAuthor(req, res, next) {
  try {
    const author = await getAuthorById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (err) {
    next(err);
  }
}

export async function createAuthorHandler(req, res, next) {
  try {
    const { name, bio } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const author = await createAuthor({ name, bio });
    res.status(201).json(author);
  } catch (err) {
    next(err);
  }
}

export async function updateAuthorHandler(req, res, next) {
  try {
    const { name, bio } = req.body;
    const author = await updateAuthor(req.params.id, { name, bio });
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (err) {
    next(err);
  }
}

export async function deleteAuthorHandler(req, res, next) {
  try {
    await deleteAuthor(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
