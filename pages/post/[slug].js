import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {  SEO } from "@components/common";
import { getPostBySlug, getPostsSlugs } from "@utils/posts";


function Post({ post, slug, frontmatter, nextPost, previousPost }) {
  return (
    <>
      <SEO
        slug={slug}
        title={frontmatter.title}
        imageUrl={`${slug}.jpg` || `${slug}.png`}
        description={frontmatter.description}
      />

      <article className="px-4  max-w-screen-2xl">
        <header className="mb-8 mt-8">
          <h1 className="mb-2 text-4xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>{" "}
          <time datetime={frontmatter.date} className="text-sm">
            {frontmatter.date}
          </time>
        </header>

        <ReactMarkdown
          className="mb-4 prose lg:prose-lg dark:prose-dark"
          escapeHtml={false}
          source={post.content}
         
        />

        <hr className="mt-4" />
      </article>

      <nav className="flex px-4 flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}





export default Post;
