import express from "express";
import { upload, createBook, listBooks, getBook, searchBooks, filterBooks } from "../controllers/book.controller.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: Endpoints for Product Management (US1, US2, US3, US18, US19)
 */

/**
 * @swagger
 * /api/books/create:
 *   post:
 *     summary: Add a new book (US1)
 *     description: |
 *       Maps to **US1** with Acceptance Criteria:

 *       - **AC3** form fields: title, author, category, price (>0), quantity, description, cover_image (JPG/PNG, <=2MB)

 *       - **AC5/AC7/AC8/AC9/AC13** backend validation messages

 *       - **AC16** prevent duplicate title

 *       - **AC18/AC19** returns new book and success message

 *       - **AC17** server error handling
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               author: { type: string }
 *               category: { type: string }
 *               price: { type: number }
 *               quantity: { type: integer }
 *               description: { type: string }
 *               publisher: { type: string }
 *               cover_image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Book added successfully (US1 AC18/AC19)
 *       400:
 *         description: Validation error (US1 AC5/AC7/AC8)
 *       409:
 *         description: Duplicate title (US1 AC16)
 *       500:
 *         description: Unable to save data (US1 AC17)
 */
router.post("/create", upload.single("cover_image"), createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: List books with pagination (US2)
 *     description: |
 *       Maps to **US2**:

 *       - **AC2** table format

 *       - **AC6** pagination via page & limit

 *       - **AC8/AC12** empty & error messages
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *       - in: query
 *         name: sortBy
 *         schema: { type: string, default: "date_added" }
 *       - in: query
 *         name: order
 *         schema: { type: string, default: "DESC", enum: ["ASC","DESC"] }
 *     responses:
 *       200:
 *         description: Paginated list of books
 *       500:
 *         description: Load error (US2 AC12)
 */
router.get("/", listBooks);



/**
 * @swagger
 * /api/books/search:
 *   get:
 *     summary: Search by title or author (US18)
 *     tags: [Books]
 *     description: |
 *       - **AC2** case-insensitive, **AC3** show basic fields

 *       - **AC8** no result message

 *       - **AC10** server error
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Search results }
 *       500: { description: Error while searching }
 */
router.get("/search", searchBooks);

/**
 * @swagger
 * /api/books/filter:
 *   get:
 *     summary: Filter by category and/or price range (US19)
 *     tags: [Books]
 *     description: |
 *       - **AC1-AC4** apply filter only after user action

 *       - **AC5** min price <= max price

 *       - **AC9** message when no match
 *     parameters:
 *       - in: query
 *         name: category
 *         schema: { type: string }
 *       - in: query
 *         name: minPrice
 *         schema: { type: number }
 *       - in: query
 *         name: maxPrice
 *         schema: { type: number }
 *     responses:
 *       200: { description: Filtered results }
 *       400: { description: Invalid price range (US19 AC5) }
 *       500: { description: Filter error }
 */
router.get("/filter", filterBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get book details (US3)
 *     tags: [Books]
 *     description: |
 *       Maps to **US3** with:

 *       - **AC1-AC3** fetch details directly from DB

 *       - **AC4** Book not found

 *       - **AC7** Server error banner

 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Book detail }
 *       404: { description: Book not found (US3 AC4) }
 *       500: { description: Server error (US3 AC7) }
 */
router.get("/:id", getBook);

export default router;
