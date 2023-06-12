import IPost from "../interfaces/IPost";
import getRandomPosts from "../lib/getRandomPosts";
import PostList from "./components/PostList";

export default async function Home() {
  const randomPosts: IPost[] = await getRandomPosts();

  return (
    <main>
      <section className="flex flex-col max-w-4xl gap-6 mx-auto">
        <PostList posts={randomPosts} />
      </section>
    </main>
  );
}
