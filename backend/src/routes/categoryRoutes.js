import express from "express";
import {
  listCategories,
  getCategory,
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", listCategories);
router.get("/:id", getCategory);
router.post("/", createCategoryHandler);
router.put("/:id", updateCategoryHandler);
router.delete("/:id", deleteCategoryHandler);

export default router;
