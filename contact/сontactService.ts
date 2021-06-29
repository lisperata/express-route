import { v4 as uuidv4 } from 'uuid';
import sequelize from '../database/config';
import { NewContactInPatchType } from './contactInterfaces';
import contactModel from './contactModel';

class Contact {
  private uuid: string;
  private name: string;
  private email: string;

  public constructor(
    name: string = '',
    email: string = '',
    uuid: string = uuidv4()
  ) {
    this.uuid = uuid;
    this.name = name;
    this.email = email;
  }

  public static async getContactsOfList(listId: string): Promise<string> {
    return JSON.stringify(
      await contactModel.findAll({
        attributes: ['uuid', 'name', 'email'],
        where: { listId },
        raw: true,
      })
    );
  }

  public async addContactWithSequelize(): Promise<void> {
    const { name, email } = this;

    await contactModel.create({ name, email });
  }

  public async changeContactByIdWithSequelize(): Promise<void> {
    const { name, email, uuid } = this;

    const newContact: NewContactInPatchType = {};
    name ? (newContact.name = name) : '';
    email ? (newContact.email = email) : '';

    await contactModel.update(newContact, {
      where: {
        uuid,
      },
    });
  }

  public async addContact(): Promise<void> {
    const { uuid, name, email } = this;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await sequelize.query(
      `INSERT INTO contacts (uuid,name,email,createdAt,updatedAt) VALUES('${uuid}','${name}', '${email}', '${date}', '${date}');`
    );
  }

  public async changeContactById(): Promise<void> {
    const { uuid, name, email } = this;
    const nameForQuery = name
      ? this._convertParameterToQuery('name', name)
      : '';
    const emailForQuery = email
      ? this._convertParameterToQuery('email', email)
      : '';
    await sequelize.query(
      this._getTheStringToUpdateQuery(uuid, nameForQuery, emailForQuery)
    );
  }

  private _convertParameterToQuery(
    nameOfParameter: string,
    parameter: string
  ): string {
    return `${nameOfParameter} = '${parameter}',`;
  }

  private _getTheStringToUpdateQuery(
    uuid: string,
    name: string = '',
    email: string = ''
  ): string {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    return `UPDATE contacts SET ${email} ${name} updatedAt='${date}' WHERE uuid = '${uuid}';`;
  }

  public static async addContactToList(contactId: string, listId: string) {
    await contactModel.update(
      { listId },
      {
        where: {
          uuid: contactId,
        },
      }
    );
  }
}

export default Contact;
