import fs from "fs";
import { typeOfUser, UsersType } from "../types";
import { getFilteredUsers } from "../utils";
import { pathToJsonFile } from "../infrastructureVariables";

class User {
  private id: number;
  private name: string;
  private age: string;

  public constructor(id: number, name: string, age: string) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static getAll(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJsonFile, "utf-8", (err, content) => {
        if (err) {
          reject("Error 500. Internal Server Error");
        }
        resolve(content);
      });
    });
  }

  public addUser(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJsonFile, "utf-8", (err, content) => {
        if (err) {
          reject(`Error 500. Internal Server Error`);
        }
        const users: UsersType = JSON.parse(content);
        const newUser: typeOfUser = {
          id: this.id,
          name: this.name,
          age: this.age,
        };
        users.push(newUser);

        fs.writeFile(pathToJsonFile, JSON.stringify(users), () => {
          resolve(`Data has been successfully written to file`);
        });
      });
    });
  }

  public updateUser(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJsonFile, "utf-8", (err, content) => {
        if (err) {
          reject(`Error 500. Internal Server Error`);
        }

        const users: UsersType = JSON.parse(content);

        const changedUser: typeOfUser = {
          id: this.id,
          name: this.name,
          age: this.age,
        };

        const newListOfUsers = users.map((user) => {
          if (user.id === changedUser.id) {
            return changedUser;
          }
          return user;
        });

        fs.writeFile(pathToJsonFile, JSON.stringify(newListOfUsers), () => {
          resolve(`Data has been successfully changed`);
        });
      });
    });
  }

  static deleteUser(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJsonFile, "utf-8", (err, content) => {
        if (err) {
          reject(`Error 500. Internal Server Error`);
        }

        const users: UsersType = JSON.parse(content);

        const filteredUsers = getFilteredUsers(users, id);

        fs.writeFile(pathToJsonFile, JSON.stringify(filteredUsers), () => {
          resolve(`Data has been successfully deleted`);
        });
      });
    });
  }
}

export default User;
