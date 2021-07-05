import sequelize from '../database/config';
import Sequelize from 'sequelize';

const ContactList = sequelize.define('contactList', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
});

export default ContactList;
