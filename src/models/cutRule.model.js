import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { FabricType } from "./fabricType.model.js";
import { ClothType } from "./clothType.model.js";

export const CutRule = sequelize.define(
  "CutRule",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fabricTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: FabricType,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    clothTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ClothType,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    tableName: "cut_rules",
    timestamps: true,
  }
);
