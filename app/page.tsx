import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-10">
      <h1 className="text-4xl font-bold">
        Welcome to My Next.js App
      </h1>

      <p className="text-lg text-gray-600">
        This is my W03 assignment project.
      </p>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Blog Posts
        </h2>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border p-4 hover:bg-gray-100"
            >
              <h3 className="text-xl font-bold">
                {post.title}
              </h3>

              <p className="text-gray-600">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}