import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Perceptron = db.define(
  "perceptron",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    iteration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    x1: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    x2: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    v: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    outerY: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Y: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    error: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    new_w1: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    new_w2: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    delta_w1: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    delta_w2: {
      type: DataTypes.FLOAT,
      allowNull: false,
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

export default Perceptron;