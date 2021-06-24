import { Response } from "express";
import Contact from "../models/Contact";

export const postContact = async (
  res: Response,
  name: string,
  email: string
): Promise<void> => {
  const contact = new Contact(name, email);
  try {
    await contact.addContact();
    res.type("plain").status(201).send("Data has been successfully added");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const putContact = async (
  res: Response,
  name: string,
  email: string,
  uuid: string
): Promise<void> => {
  const contact = new Contact(name, email, uuid);
  try {
    await contact.changeContactById();
    res.type("plain").send("Data has been successfully changed");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

