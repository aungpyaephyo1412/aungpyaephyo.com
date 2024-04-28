import { getBlogPosts } from '@/db/blog';
import { MdxViewer } from '@/components/mdx-viewer';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import moment from 'moment';
// or Dynamic metadata
interface Props {
  params: { slug: string };
}
export async function generateMetadata({ params: { slug } }: Props) {
  return {
    title: getBlogPosts().find((b) => b.slug === slug)?.metadata.title,
  };
}
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
const Page = ({ params: { slug } }: Props) => {
  const blog = getBlogPosts().find((b) => b.slug === slug);
  if (!blog) notFound();
  return (
    <div>
      <header className="mb-6 pb-4">
        <h1 className="mb-2 text-4xl font-extrabold">{blog.metadata.title}</h1>
        <time className="text-sm opacity-70" dateTime="2021-05-03 22:00">
          {formatDate(blog.metadata.publishedAt)}
        </time>
        <span className='before:content-["•"] text-sm opacity-70 before:px-1'>
          {moment(blog.metadata.publishedAt, 'YYYYMMDD').fromNow()}
        </span>
      </header>
      <article className="prose prose-lg relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-img:rounded-lg">
        <MdxViewer source={blog.content} />
      </article>
    </div>
  );
};

export default Page;
