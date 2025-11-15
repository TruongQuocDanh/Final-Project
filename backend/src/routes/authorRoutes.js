import express from "express";
import {
  listAuthors,
  getAuthor,
  createAuthorHandler,
  updateAuthorHandler,
  deleteAuthorHandler,
} from "../controllers/authorController.js";

const router = express.Router();

router.get("/", listAuthors);
router.get("/:id", getAuthor);
router.post("/", createAuthorHandler);
router.put("/:id", updateAuthorHandler);
router.delete("/:id", deleteAuthorHandler);

export default router;
