import User from "../models/model";

export const getUsers = async (): Promise<string> => {
  try {
    return await User.getAll();
  } catch (err) {
    throw err;
  }
};

export const postUser = async (
  id: number,
  name: string,
  age: string
): Promise<string> => {
  const user = new User(id, name, age);
  try {
    return await user.addUser();
  } catch (err) {
    throw err;
  }
};

export const putUser = async (
  id: number,
  name: string,
  age: string
): Promise<string> => {
  const user = new User(id, name, age);
  try {
    return await user.updateUser();
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (
  id: number
): Promise<string> => {
  try {
    return await User.deleteUser(id);
  } catch (err) {
    throw err;
  }
};
