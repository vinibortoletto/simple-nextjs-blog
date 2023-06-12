import { IPost } from "@/interfaces";

export default async function getPostById(postId: string): Promise<IPost> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
