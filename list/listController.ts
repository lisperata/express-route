import { Response } from 'express';
import List from './listService';

export const postList = async (res: Response, name: string): Promise<void> => {
  try {
    await List.addNewList(name);
    res.type('plain').status(201).send('Data has been successfully added');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export const changeTheListInContact = async (
  res: Response,
  nameOfList: string,
  uuidOfContact: string
): Promise<void> => {
  try {
    await List.addContactToList(uuidOfContact, nameOfList);
    res.type('plain').status(200).send('Data has been successfully changed');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export const getContactsByListId = async (
  res: Response,
  uuid: string
): Promise<void> => {
  try {
    const contacts: string = JSON.stringify(
      await List.getContactsOfListByListId(uuid)
    );
    res.type('json').status(200).send(contacts);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};
