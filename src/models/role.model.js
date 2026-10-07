import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { WorkArea } from "./workArea.model.js";

export const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roleName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    workAreaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: WorkArea,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  }
);
