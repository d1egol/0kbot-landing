import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

// Redirect /recursos/[slug] → /blog/[slug] to avoid duplicate content
export default async function RecursosSlugPage(props: Props) {
  const params = await props.params;
  redirect(`/blog/${params.slug}`);
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
