import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

// Redirect /recursos/[slug] → /blog/[slug] to avoid duplicate content
export default function RecursosSlugPage({ params }: Props) {
  redirect(`/blog/${params.slug}`);
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
