import pkg from "sequelize";
const { DataTypes } = pkg;
import sequelize from "./index";

const listSequelize = sequelize.define("contact", {
  uuid: {
    type: "VARCHAR(36)",
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default listSequelize;
