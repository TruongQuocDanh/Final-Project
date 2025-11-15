import express from "express";
import {
  listBooks,
  getBook,
  createBookHandler,
  updateBookHandler,
  deleteBookHandler,
  upload,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", listBooks);
router.get("/:id", getBook);

// multipart/form-data with field name "image"
router.post("/", upload.single("image"), createBookHandler);
router.put("/:id", upload.single("image"), updateBookHandler);
router.delete("/:id", deleteBookHandler);

export default router;
