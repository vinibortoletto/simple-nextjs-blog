import { IPost } from "@/interfaces";

export default async function getAllPosts(): Promise<IPost[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
