import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Customer } from "./customer.model.js";
import { ClothType } from "./clothType.model.js";
import { FabricType } from "./fabricType.model.js";

export const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderCode: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Customer,
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
  },
  {
    tableName: "orders",
    timestamps: true,
  }
);
