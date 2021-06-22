import { UsersType } from "../types";

export const getFilteredUsers = (users: UsersType, id: number): UsersType => {
  return users.filter((item) => item.id != id);
};
