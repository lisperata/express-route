import Sequelize from 'sequelize';
import sequelize from '../database/config';
import listModel from '../list/listModel';

const contactModel = sequelize.define('contacts', {
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

contactModel.belongsTo(listModel, { foreignKey: 'listId' });

export default contactModel;
