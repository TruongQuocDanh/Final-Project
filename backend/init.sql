-- Database initialization script for Bookstore backend
-- Run this in your PostgreSQL database (e.g., psql, pgAdmin)

CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Drop tables if they exist (for development/reset)
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Authors table
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Books table
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL DEFAULT 0,
    quantity INTEGER NOT NULL DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'In Stock',
    image_url VARCHAR(255),
    author_id INT REFERENCES authors(id) ON DELETE SET NULL,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_book_status CHECK (status IN ('In Stock', 'Out of Stock', 'Inactive'))
);

-- Indexes to optimize lookup and search
CREATE INDEX idx_books_title_trgm ON books USING gin (title gin_trgm_ops);
CREATE INDEX idx_books_category_id ON books (category_id);
CREATE INDEX idx_books_author_id ON books (author_id);
CREATE INDEX idx_books_status ON books (status);

CREATE INDEX idx_authors_name_trgm ON authors USING gin (name gin_trgm_ops);
CREATE INDEX idx_categories_name_trgm ON categories USING gin (name gin_trgm_ops);

-- Trigger function to update updated_at on row modification
CREATE OR REPLACE FUNCTION set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_authors_set_timestamp
BEFORE UPDATE ON authors
FOR EACH ROW
EXECUTE FUNCTION set_timestamp();

CREATE TRIGGER trg_categories_set_timestamp
BEFORE UPDATE ON categories
FOR EACH ROW
EXECUTE FUNCTION set_timestamp();

CREATE TRIGGER trg_books_set_timestamp
BEFORE UPDATE ON books
FOR EACH ROW
EXECUTE FUNCTION set_timestamp();

-- Function: search books with optional filters
CREATE OR REPLACE FUNCTION search_books(
    p_query TEXT DEFAULT NULL,
    p_category_id INT DEFAULT NULL,
    p_status VARCHAR(20) DEFAULT NULL,
    p_limit INT DEFAULT 50,
    p_offset INT DEFAULT 0
)
RETURNS TABLE (
    id INT,
    title VARCHAR,
    description TEXT,
    price NUMERIC,
    quantity INT,
    status VARCHAR,
    image_url VARCHAR,
    author_name VARCHAR,
    category_name VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        b.id,
        b.title,
        b.description,
        b.price,
        b.quantity,
        b.status,
        b.image_url,
        a.name AS author_name,
        c.name AS category_name
    FROM books b
    LEFT JOIN authors a ON b.author_id = a.id
    LEFT JOIN categories c ON b.category_id = c.id
    WHERE
        (p_query IS NULL OR b.title ILIKE '%' || p_query || '%' OR a.name ILIKE '%' || p_query || '%')
        AND (p_category_id IS NULL OR b.category_id = p_category_id)
        AND (p_status IS NULL OR b.status = p_status)
    ORDER BY b.created_at DESC
    LIMIT p_limit OFFSET p_offset;
END;
$$ LANGUAGE plpgsql STABLE;

-- Procedure: restock a book (increase quantity)
CREATE OR REPLACE PROCEDURE restock_book(p_book_id INT, p_amount INT)
LANGUAGE plpgsql
AS $$
BEGIN
    IF p_amount <= 0 THEN
        RAISE EXCEPTION 'Amount must be positive';
    END IF;

    UPDATE books
    SET quantity = quantity + p_amount,
        status = CASE WHEN quantity + p_amount > 0 THEN 'In Stock' ELSE status END
    WHERE id = p_book_id;
END;
$$;

-- Procedure: mark book as inactive
CREATE OR REPLACE PROCEDURE mark_book_inactive(p_book_id INT)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE books
    SET status = 'Inactive'
    WHERE id = p_book_id;
END;
$$;

-- Sample data
INSERT INTO authors (name, bio) VALUES
    ('Dan Brown', 'American author best known for thriller novels.'),
    ('J.K. Rowling', 'British author, best known for the Harry Potter series.'),
    ('Haruki Murakami', 'Japanese writer known for his surreal novels.');

INSERT INTO categories (name, description) VALUES
    ('Learning', 'Educational and learning materials.'),
    ('Fiction', 'Fiction books and novels.'),
    ('Fantasy', 'Fantasy and magic-themed books.'),
    ('Science', 'Science and technology books.');

INSERT INTO books (title, description, price, quantity, status, author_id, category_id)
VALUES
    ('The Da Vinci Code', 'Mystery thriller novel.', 9.99, 10, 'In Stock', 1, 2),
    ('Harry Potter and the Philosopher''s Stone', 'First book in the Harry Potter series.', 12.50, 5, 'In Stock', 2, 3),
    ('Kafka on the Shore', 'Magical realism novel.', 11.00, 0, 'Out of Stock', 3, 2);
