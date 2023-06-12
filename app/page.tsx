import { IPost } from "@/interfaces";
import { getRandomPosts } from "@/lib";
import { PostList } from "./components";

export default async function Home() {
  const randomPosts: IPost[] = await getRandomPosts();

  return (
    <section className="flex flex-col max-w-2xl gap-6 mx-auto">
      <PostList posts={randomPosts} />
    </section>
  );
}
