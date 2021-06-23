import User from "../models";
import { Response } from "express";

export const getUsers = async (res: Response): Promise<void> => {
  try {
    const users: string = await User.getAll();
    res.type("json").send(users);
  } catch {
    res.status(500).send("Internal Server Error");
  }
};

export const postUser = async (
  res: Response,
  id: number,
  name: string,
  age: string
): Promise<void> => {
  const user = new User(id, name, age);
  try {
    await user.addUser();
    res.type("plain").status(201).send("Data has been successfully changed");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const putUser = async (
  res: Response,
  id: number,
  name: string,
  age: string
): Promise<void> => {
  const user = new User(id, name, age);
  try {
    await user.updateUser();
    res.type("plain").send("Data has been successfully changed");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (res: Response, id: number): Promise<void> => {
  try {
    await User.deleteUser(id);
    res.type("plain").send("Data has been successfully deleted");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
