import Sequelize from 'sequelize';
import sequelize from '../database/config';
import { IListModel } from './list.interfaces';

const List = sequelize.define<IListModel>('lists', {
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

export default List;
