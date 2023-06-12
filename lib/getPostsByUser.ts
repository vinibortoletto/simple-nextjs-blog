export default async function getPostsByUser(userId: string) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
