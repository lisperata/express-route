import Sequelize from 'sequelize';
import sequelize from '../database/config';
import { IContactModel } from './contactInterfaces';

const Contact = sequelize.define<IContactModel>('contacts', {
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

export default Contact;
