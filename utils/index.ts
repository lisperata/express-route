import { TypeOfUser, UsersType } from "../types";

export const getFilteredUsers = (users: UsersType, id: number): UsersType => {
  return users.filter((item) => item.id != id);
};

export const getChangedUsers = (users: UsersType, changedUser: TypeOfUser) => {
return users.map((user) => {
  if (user.id === changedUser.id) {
    return changedUser;
  }
  return user;
});
}