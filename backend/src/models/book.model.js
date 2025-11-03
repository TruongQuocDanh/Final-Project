import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define("Book", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false, validate: { min: 0.01 } },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0, validate: { min: 0 } },
  description: { type: DataTypes.TEXT },
  cover_image: { type: DataTypes.STRING },
  publisher: { type: DataTypes.STRING },
  date_added: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
    validate: { isIn: [["active","inactive","out_of_stock"]] }
  }
}, { tableName: "books" });

export default Book;
