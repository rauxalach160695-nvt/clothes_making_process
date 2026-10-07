import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const WorkArea = sequelize.define(
  "WorkArea",
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
    code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    subArea: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "work_areas",
    timestamps: true,
  }
);
