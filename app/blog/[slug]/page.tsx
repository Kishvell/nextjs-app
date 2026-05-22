import { posts } from "@/lib/posts";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h1 className="p-10 text-3xl">Post not found</h1>;
  }

  return (
    <main className="flex flex-col gap-6 p-10">
      <h1 className="text-4xl font-bold">
        {post.title}
      </h1>

      <p className="text-lg text-gray-600">
        {post.description}
      </p>
    </main>
  );
}