import type { Metadata } from "next";
import Link from "next/link";
import { IPost, IUser } from "@/interfaces";
import { getPostById, getUserById } from "@/lib/";

interface IParams {
  params: { postId: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { postId } = params;
  const { title, body, userId }: IPost = await getPostById(postId);
  const user: IUser | undefined = await getUserById(userId);

  return {
    title: title,
    description: `A blog post by ${user?.name}.`,
  };
}

export default async function Post({ params }: IParams) {
  const { postId } = params;
  const { title, body, userId }: IPost = await getPostById(postId);
  const user: IUser | undefined = await getUserById(userId);

  const paragraphs = body.split("\n");
  const formattedBody = paragraphs.map((paragraph, index) => (
    <p key={index} className="first-letter:capitalize">
      {paragraph}
    </p>
  ));

  return (
    <section className="max-w-2xl p-6 mx-auto transition rounded-md shadow bg-slate-100">
      <h2 className="mb-2 text-3xl font-bold capitalize">{title}</h2>
      <div className="my-2 border-b-2 border-slate-300"></div>
      <h3 className="mb-6 text-sm">Author: {user?.name}</h3>
      <div className="flex flex-col gap-2 text-2xl">{formattedBody}</div>

      <div className="mt-6 text-sm hover:underline">
        <Link href="/">{`< Return Home`}</Link>
      </div>
    </section>
  );
}
