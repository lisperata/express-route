import listModel from './listModel';
import Contact from '../contact/сontactService';
class List {
  private uuid: string;
  private name: string;

  public constructor(name: string = '', uuid: string = '') {
    this.name = name;
    this.uuid = uuid;
  }

  static async getContactsOfListByListId(listId: string): Promise<string> {
    return await Contact.getContactsOfList(listId);
  }

  public async addNewList(): Promise<void> {
    const name = this.name;
    await listModel.create({ name });
  }

  public async addContactToList(): Promise<void> {
    const uuidOfContact: string = this.uuid;
    const nameOfList: string = this.name;

    const listWithTheSearchedName = await listModel.findOne({
      attributes: ['uuid'],
      where: { name: nameOfList },
    });

    const idOfSearchedList: string = listWithTheSearchedName?.get().uuid;

    await Contact.addContactToList(uuidOfContact, idOfSearchedList);
  }
}

export default List;
