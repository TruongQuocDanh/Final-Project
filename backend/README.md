# Bookstore Backend (Express + PostgreSQL)

This is a minimal backend for the Bookstore project with:
- Express.js
- PostgreSQL (pg)
- Image upload + processing (multer + sharp) to `src/photo/`
- Swagger UI at `/api-docs`
- Tables: books, authors, categories
- SQL functions & procedures in `init.sql` for optimized search and stock management

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create database and run SQL:

   - Create a database named `bookstore`
   - Run `init.sql` in pgAdmin or psql

3. Configure environment:

   - Copy `.env.example` to `.env`
   - Update DB credentials if needed

4. Start server:

   ```bash
   npm run dev
   ```

5. Test:

   - Open Swagger UI: http://localhost:5000/api-docs
   - Example endpoints:
     - `GET /api/books`
     - `POST /api/books` (multipart/form-data with field `image`)
     - `GET /photo/{filename}` – served from `src/photo/`
