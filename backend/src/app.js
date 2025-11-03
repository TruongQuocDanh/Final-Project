import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import sequelize from "./config/db.js";
import "./models/book.model.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Swagger setup
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Bookstore API",
      version: "1.0.0",
      description:
        "Swagger documentation with explicit mapping to Acceptance Criteria (US1, US2, US3, US18, US19)."
    },
    servers: [{ url: "http://localhost:" + (process.env.PORT || 5000) }]
  },
  apis: [path.join(__dirname, "routes", "*.js")]
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/books", bookRoutes);

// DB sync (dev only)
sequelize.sync().then(() => {
  console.log("Sequelize synced");
}).catch(err => console.error("Sequelize sync error:", err));

export default app;
