import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { FabricType } from "./fabricType.model.js";
import { Order } from "./order.model.js";

export const FabricLot = sequelize.define(
  "FabricLot",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    DayIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalSquareMeter: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
    tableName: "fabric_lots",
    timestamps: true,
  }
);
