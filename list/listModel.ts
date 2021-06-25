import Sequelize from "sequelize";
import sequelize from "../database/config";

const listSequelize = sequelize.define("contact", {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default listSequelize;
