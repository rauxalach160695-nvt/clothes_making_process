import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { ClothType } from "./clothType.model.js";
import { CommonDefect } from "./commonDefect.model.js";

export const ClothTypeCommonDefect = sequelize.define(
  "ClothTypeCommonDefect",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clothTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ClothType,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    commonDefectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CommonDefect,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "cloth_type_common_defects",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["clothTypeId", "commonDefectId"],
      },
    ],
  }
);
