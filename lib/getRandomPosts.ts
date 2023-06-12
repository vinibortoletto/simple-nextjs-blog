import getAllPosts from "./getAllPosts";

export default async function getRandomPosts() {
  const posts = await getAllPosts();
  const randomPosts = [];

  while (randomPosts.length < 5) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    randomPosts.push(randomPost);
  }

  return randomPosts;
}
