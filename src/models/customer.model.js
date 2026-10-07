import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Customer = sequelize.define(
  "Customer",
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
    tableName: "customers",
    timestamps: true,
  }
);
