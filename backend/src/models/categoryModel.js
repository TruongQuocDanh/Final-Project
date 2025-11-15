import { pool } from "../config/db.js";

export async function getAllCategories() {
  const result = await pool.query(
    "SELECT id, name, description, created_at, updated_at FROM categories ORDER BY name ASC"
  );
  return result.rows;
}

export async function getCategoryById(id) {
  const result = await pool.query(
    "SELECT id, name, description, created_at, updated_at FROM categories WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function createCategory({ name, description }) {
  const result = await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *",
    [name, description || null]
  );
  return result.rows[0];
}

export async function updateCategory(id, { name, description }) {
  const result = await pool.query(
    `UPDATE categories
     SET name = COALESCE($2, name),
         description = COALESCE($3, description)
     WHERE id = $1
     RETURNING *`,
    [id, name, description]
  );
  return result.rows[0] || null;
}

export async function deleteCategory(id) {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
  return true;
}
