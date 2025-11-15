import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { notFoundHandler, errorHandler } from "./errorMiddleware.js";
import { testDbConnection } from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folders for images
app.use("/photo", express.static(path.join(projectRoot, "src", "photo")));
app.use("/uploads", express.static(path.join(projectRoot, "src", "uploads")));

// Swagger docs
const swaggerPath = path.join(projectRoot, "src", "docs", "swagger.json");
let swaggerDocument = {};
if (fs.existsSync(swaggerPath)) {
  swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, "utf-8"));
}

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Test DB connection on startup
testDbConnection();

export default app;
