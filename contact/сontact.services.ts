import sequelize from '../database/config';
import { NewContactInPatchType } from './contact.interfaces';
import Contact from './contact.model';

class ContactService {
  public static async getContactsOfList(listId: string): Promise<string> {
    return JSON.stringify(
      await Contact.findAll({
        attributes: ['uuid', 'name', 'email'],
        where: { listId },
        raw: true,
      })
    );
  }

  public static async addContactWithSequelize(
    name: string,
    email: string
  ): Promise<void> {
    await Contact.create({ name, email });
  }

  public static async changeContactByIdWithSequelize(
    name: string,
    email: string,
    uuid: string
  ): Promise<void> {
    const newContact: NewContactInPatchType = {};
    name ? (newContact.name = name) : '';
    email ? (newContact.email = email) : '';

    await Contact.update(newContact, {
      where: {
        uuid,
      },
    });
  }

  public static async addContact(
    name: string,
    email: string,
    uuid: string
  ): Promise<void> {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await sequelize.query(
      `INSERT INTO contacts (uuid,name,email,createdAt,updatedAt) VALUES('${uuid}','${name}', '${email}', '${date}', '${date}');`
    );
  }

  public async changeContactById(
    name: string,
    email: string,
    uuid: string
  ): Promise<void> {
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
    await Contact.update(
      { listId },
      {
        where: {
          uuid: contactId,
        },
      }
    );
  }
}

export default ContactService;
