import { IUser } from "@/interfaces";

export default async function getAllUsers(): Promise<IUser[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
