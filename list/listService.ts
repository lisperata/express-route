import listModel from './listModel';
import Contact from '../contact/сontactService';
class List {
  public static async getContactsOfListByListId(listId: string): Promise<string> {
    return await Contact.getContactsOfList(listId);
  }

  public static async addNewList(name: string): Promise<void> {
    await listModel.create({ name });
  }

  public static async addContactToList(uuidOfContact: string, nameOfList: string): Promise<void> {
    const listWithTheSearchedName = await listModel.findOne({
      attributes: ['uuid'],
      where: { name: nameOfList },
    });

    const idOfSearchedList: string = listWithTheSearchedName?.get().uuid;

    await Contact.addContactToList(uuidOfContact, idOfSearchedList);
  }
}

export default List;
