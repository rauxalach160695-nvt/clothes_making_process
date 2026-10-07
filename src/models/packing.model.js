import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Cloth } from "./cloth.model.js";
import { Employee } from "./employee.model.js";

export const Packing = sequelize.define(
  "Packing",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clothId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cloth,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    packerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    qcPackId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quality: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "packings",
    timestamps: true,
  }
);
