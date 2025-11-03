# Bookstore API (Express + PostgreSQL + Swagger)

## Quick start
```bash
# 1) Install deps
npm install

# 2) Copy env
cp .env.example .env
# then edit .env with your PostgreSQL credentials

# 3) Run in dev
npm run dev
```

Swagger UI will be at: http://localhost:5000/docs

## Notes
- Uploads are saved into `/uploads` (created automatically).
- Sequelize `sync()` will auto-create tables (dev only).
- Swagger docs include explicit mapping to Acceptance Criteria (AC) for US1, US2, US3, US18, US19.
