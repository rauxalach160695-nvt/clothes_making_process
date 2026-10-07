import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ClothType = sequelize.define(
  "ClothType",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "cloth_types",
    timestamps: true,
  }
);
