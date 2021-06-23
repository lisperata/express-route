import { readFile, writeFile } from "fs/promises";
import { TypeOfUser, UsersType } from "../types";
import { getChangedUsers, getFilteredUsers } from "../utils";
import { PATH_TO_JSON_FILE } from "../infrastructureVariables";

class User {
  private id: number;
  private name: string;
  private age: string;

  public constructor(id: number, name: string, age: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static async getAll(): Promise<string> {
    return await readFile(PATH_TO_JSON_FILE, "utf-8");
  }

  public async addUser(): Promise<void> {
    const users: UsersType = JSON.parse(
      await readFile(PATH_TO_JSON_FILE, "utf-8")
    );
    const { id, name, age } = this;
    const newUser: TypeOfUser = {
      id,
      name,
      age,
    };
    users.push(newUser);

    await writeFile(PATH_TO_JSON_FILE, JSON.stringify(users));
  }

  public async updateUser(): Promise<void> {
    const users: UsersType = JSON.parse(
      await readFile(PATH_TO_JSON_FILE, "utf-8")
    );

    const changedUser: TypeOfUser = {
      id: this.id,
      name: this.name,
      age: this.age,
    };

    const newListOfUsers = getChangedUsers(users, changedUser);

    await writeFile(PATH_TO_JSON_FILE, JSON.stringify(newListOfUsers));
  }

  static async deleteUser(id: number): Promise<void> {
    const users: UsersType = JSON.parse(
      await readFile(PATH_TO_JSON_FILE, "utf-8")
    );

    const filteredUsers = getFilteredUsers(users, id);
    await writeFile(PATH_TO_JSON_FILE, JSON.stringify(filteredUsers));
  }
}

export default User;
