import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { SemiFabric } from "./semiFabric.model.js";
import { Employee } from "./employee.model.js";

export const Cloth = sequelize.define(
  "Cloth",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    semiFabricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: SemiFabric,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    sewerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    qcSewId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: "clothes",
    timestamps: true,
  }
);
