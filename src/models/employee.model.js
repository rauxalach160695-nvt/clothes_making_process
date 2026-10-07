import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Role } from "./role.model.js";

export const Employee = sequelize.define(
  "Employee",
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
    gender: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    tableName: "employees",
    timestamps: true,
  }
);
