import Link from "next/link";
import IPost from "../../interfaces/IPost";
import getUserById from "../../lib/getUserById";

interface IProps {
  posts: IPost[];
}

export default function PostList(props: IProps) {
  const { posts } = props;

  const getPostAuthor = async (userId: number) => {
    const user = await getUserById(userId);
    if (!user) throw new Error("User not found");
    return user.name;
  };

  return (
    <ul className="flex flex-col gap-6">
      {posts.map(async (post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="p-6 transition rounded-md shadow bg-slate-100 hover:shadow-md">
            <h2 className="text-2xl capitalize">{post.title}</h2>
            <p className="text-sm">
              Author: {await getPostAuthor(post.userId)}
            </p>
          </div>
        </Link>
      ))}
    </ul>
  );
}
