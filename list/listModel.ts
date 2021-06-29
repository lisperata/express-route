import Sequelize from 'sequelize';
import sequelize from '../database/config';

const listModel = sequelize.define('lists', {
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

export default listModel;
