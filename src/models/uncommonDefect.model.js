import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Order } from "./order.model.js";

export const UncommonDefect = sequelize.define(
  "UncommonDefect",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "uncommon_defects",
    timestamps: true,
  }
);
