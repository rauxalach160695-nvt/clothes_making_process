import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { FabricRoll } from "./fabricRoll.model.js";
import { Employee } from "./employee.model.js";

export const SemiFabric = sequelize.define(
  "SemiFabric",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fabricRollId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: FabricRoll,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    cutterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    qcCutId: {
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
    timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "semi_fabrics",
    timestamps: true,
  }
);
