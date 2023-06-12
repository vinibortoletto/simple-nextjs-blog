import IUser from "../interfaces/IUser";
import getAllUsers from "./getAllUsers";

export default async function getUserById(userId: number) {
  const users: IUser[] = await getAllUsers();
  const user = users.find((user) => user.id === userId);
  return user;
}
