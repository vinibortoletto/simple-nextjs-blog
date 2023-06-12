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
        <div key={post.id} className="p-2 border-l-8 border-slate-900">
          <Link href={`/posts/${post.id}`}>
            <h2 className="text-2xl capitalize">{post.title}</h2>
            <p className="text-sm">
              Author: {await getPostAuthor(post.userId)}
            </p>
          </Link>
        </div>
      ))}
    </ul>
  );
}
