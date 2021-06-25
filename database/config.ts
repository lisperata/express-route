import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mail", "root", "...", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
