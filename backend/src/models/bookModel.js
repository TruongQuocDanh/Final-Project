import { pool } from "../config/db.js";

const baseSelect = `
  SELECT
    b.id,
    b.title,
    b.description,
    b.price,
    b.quantity,
    b.status,
    b.image_url,
    b.author_id,
    a.name AS author_name,
    b.category_id,
    c.name AS category_name,
    b.created_at,
    b.updated_at
  FROM books b
  LEFT JOIN authors a ON b.author_id = a.id
  LEFT JOIN categories c ON b.category_id = c.id
`;

export async function getAllBooks() {
  const result = await pool.query(baseSelect + " ORDER BY b.created_at DESC");
  return result.rows;
}

export async function getBookById(id) {
  const result = await pool.query(
    baseSelect + " WHERE b.id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function createBook({
  title,
  description,
  price,
  quantity,
  status,
  image_url,
  author_id,
  category_id,
}) {
  const result = await pool.query(
    `INSERT INTO books
      (title, description, price, quantity, status, image_url, author_id, category_id)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      title,
      description || null,
      price !== undefined ? price : 0,
      quantity !== undefined ? quantity : 0,
      status || "In Stock",
      image_url || null,
      author_id || null,
      category_id || null,
    ]
  );
  return result.rows[0];
}

export async function updateBook(
  id,
  { title, description, price, quantity, status, image_url, author_id, category_id }
) {
  const result = await pool.query(
    `UPDATE books
     SET
       title       = COALESCE($2, title),
       description = COALESCE($3, description),
       price       = COALESCE($4, price),
       quantity    = COALESCE($5, quantity),
       status      = COALESCE($6, status),
       image_url   = COALESCE($7, image_url),
       author_id   = COALESCE($8, author_id),
       category_id = COALESCE($9, category_id)
     WHERE id = $1
     RETURNING *`,
    [id, title, description, price, quantity, status, image_url, author_id, category_id]
  );
  return result.rows[0] || null;
}

export async function deleteBook(id) {
  await pool.query("DELETE FROM books WHERE id = $1", [id]);
  return true;
}

export async function searchBooks({ query, category_id, status, limit = 50, offset = 0 }) {
  const result = await pool.query(
    "SELECT * FROM search_books($1, $2, $3, $4, $5)",
    [query || null, category_id || null, status || null, limit, offset]
  );
  return result.rows;
}
