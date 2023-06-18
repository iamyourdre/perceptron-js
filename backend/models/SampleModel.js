import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Sample = db.define(
  "sample",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    harta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    utang: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await db.sync();
})();

export default Sample;