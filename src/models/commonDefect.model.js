import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const CommonDefect = sequelize.define(
  "CommonDefect",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "common_defects",
    timestamps: true,
  }
);
