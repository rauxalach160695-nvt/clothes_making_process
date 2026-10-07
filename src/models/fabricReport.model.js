import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { FabricRoll } from "./fabricRoll.model.js";
import { Employee } from "./employee.model.js";

export const FabricReport = sequelize.define(
  "FabricReport",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fabricRollId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: FabricRoll,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    qcFabricRollId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    totalScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    point1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    point2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    point3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    point4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    tableName: "fabric_reports",
    timestamps: true,
  }
);
