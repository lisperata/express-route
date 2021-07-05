import { Response } from 'express';
import ContactService from './сontact.services';

export const postContact = async (
  res: Response,
  name: string,
  email: string
): Promise<void> => {
  try {
    await ContactService.addContactWithSequelize(name, email);
    res.type('plain').status(201).send('Data has been successfully added');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

export const putContact = async (
  res: Response,
  name: string,
  email: string,
  uuid: string
): Promise<void> => {
  try {
    await ContactService.changeContactByIdWithSequelize(name, email, uuid);
    res.type('plain').send('Data has been successfully changed');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};
