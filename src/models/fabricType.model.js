import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const FabricType = sequelize.define(
  "FabricType",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    FabricName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    FabricColor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "fabric_types",
    timestamps: true,
  }
);
