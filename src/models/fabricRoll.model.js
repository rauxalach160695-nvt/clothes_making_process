import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { FabricLot } from "./fabricLot.model.js";

export const FabricRoll = sequelize.define(
  "FabricRoll",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fabricLotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: FabricLot,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fabricSquareMeter: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "fabric_rolls",
    timestamps: true,
  }
);
