import List from './list.model';
import Contact from '../contact/contact.model';
class ListService {
  public static async getContactsOfListByListId(
    listId: string
  ): Promise<string> {
    const list = await List.findByPk(listId);

    if (!list) {
      throw new Error();
    }

    return await list.getContacts({
      attributes: ['name', 'email'],
      joinTableAttributes: ['listUuid'],
    });
  }

  public static async addNewList(name: string): Promise<void> {
    await List.create({ name });
  }

  public static async addContactToList(
    uuidOfContact: string,
    uuidOfList: string
  ): Promise<void> {
    const list = await List.findByPk(uuidOfList);
    const contact = await Contact.findByPk(uuidOfContact);

    if (!list || !contact) {
      throw new Error();
    }

    await list.addContact(contact);
  }
}

export default ListService;
