import { Model } from 'sequelize/types';
import { IContactModel } from '../contact/contactInterfaces';

export interface IListModel extends Model {
  uuid: string;
  name: string;
  getContacts: (_: IParametersOfGetContacts) => string;
  addContact: (contact: IContactModel) => any;
}

export interface IParametersOfGetContacts {
  attributes: Array<string>;
  joinTableAttributes: Array<string>;
}

export interface IContactFromList {
  name: string;
  email: string;
  contactList: {
    listUuid: string;
  };
}
