# 📚 Bookstore Admin (Frontend)

React + Vite + Ant Design v5 admin UI for managing books.

- Backend API base: `http://localhost:5000/api/books`
- Uses **Axios** for requests
- Environment variable via `.env` (`VITE_API_BASE_URL`)
- Vite dev **proxy** configured to avoid CORS during development

## 🚀 Quick Start
```bash
npm install
npm run dev
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

> Adjust `.env` if your backend host/port changes.

## 🔧 Environment
```
VITE_API_BASE_URL=http://localhost:5000/api/books
```

## 📡 API Endpoints used
- `GET /api/books?page=1&limit=10`
- `POST /api/books/create` (multipart/form-data; field name: `cover_image`)
- `GET /api/books/search?q=keyword`
- `GET /api/books/filter?category=...&minPrice=...&maxPrice=...`
- `GET /api/books/:id`

## 🧩 Files
- `src/utils/api.js`: Axios helper (reads `VITE_API_BASE_URL`)
- `src/pages/Dashboard.jsx`: Fetches real API, pagination, add book
- `src/components/AddBookModal.jsx`: Validates fields, previews image, passes `cover_image` (File) to API
