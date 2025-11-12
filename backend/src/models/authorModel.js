import { pool } from "../config/db.js";

export async function getAllAuthors() {
  const result = await pool.query(
    "SELECT id, name, bio, created_at, updated_at FROM authors ORDER BY name ASC"
  );
  return result.rows;
}

export async function getAuthorById(id) {
  const result = await pool.query(
    "SELECT id, name, bio, created_at, updated_at FROM authors WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function createAuthor({ name, bio }) {
  const result = await pool.query(
    "INSERT INTO authors (name, bio) VALUES ($1, $2) RETURNING *",
    [name, bio || null]
  );
  return result.rows[0];
}

export async function updateAuthor(id, { name, bio }) {
  const result = await pool.query(
    `UPDATE authors
     SET name = COALESCE($2, name),
         bio = COALESCE($3, bio)
     WHERE id = $1
     RETURNING *`,
    [id, name, bio]
  );
  return result.rows[0] || null;
}

export async function deleteAuthor(id) {
  await pool.query("DELETE FROM authors WHERE id = $1", [id]);
  return true;
}
