import { Response } from 'express';
import List from './listService';

export const postList = async (res: Response, name: string): Promise<void> => {
  const list = new List(name);
  try {
    await list.addNewList();
    await list.addContactToList();
    res.type('plain').status(201).send('Data has been successfully added');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export const changeTheListInContact = async (
  res: Response,
  name: string,
  uuid: string
): Promise<void> => {
  const list = new List(name, uuid);
  try {
    await list.addContactToList();
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
    const contacts = JSON.stringify(await List.getContactsOfListByListId(uuid));
    res.type('json').status(200).send(contacts);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};
