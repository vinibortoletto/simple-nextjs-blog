import { IUser } from "@/interfaces";
import getAllUsers from "./getAllUsers";

export default async function getUserById(userId: number): Promise<IUser> {
  const users: IUser[] = await getAllUsers();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
