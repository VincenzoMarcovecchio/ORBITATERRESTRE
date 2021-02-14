import { React, useState } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { getSortedPosts } from '@utils/posts';

export default function Home({ posts }) {
  const [currentCategory, setCurrentCategory] = useState(null);
  let categories = [];
  for (let i = 0; i < posts.length; i++) {
    categories.push(posts[i].frontmatter.category);
  }
  let merged = [].concat.apply([], categories);
  const uniquecat = [...new Set(merged)];

  return (
    <LayoutComponent>
      <SEO title="Il blog " />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <div className="display flex  space-x-2 md:space-x-8">
          {uniquecat.map((cate, i) => {
            return (
              <span
                className="cursor-pointer px-2  py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                key={i}
                onClick={() => setCurrentCategory(cate)}
              >
                {cate}
              </span>
            );
          })}
        </div>
        <div className="max-w-md mx-auto px-4 sm:px-6 display flex flex-col items-start">
          {currentCategory
            ? posts
                .filter(
                  ({ frontmatter: { category } }) =>
                    category === currentCategory
                )
                .map(
                  ({
                    frontmatter: { title, description, category, date },
                    slug,
                  }) => (
                    <article key={slug}>
                      <header className="mb-2">
                        <h3 className="mb-2">
                          <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                            <a className="text-4xl font-bold text-yellow-600 font-display">
                              {title}
                            </a>
                          </Link>
                        </h3>
                        <span
                          onClick={() => setCurrentCategory(category)}
                          className="px-2  py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        >
                          {category}
                        </span>
                        <span className="text-sm">&nbsp;&nbsp;{date}</span>
                      </header>
                      <section>
                        <p className="mb-8 text-lg">{description}</p>
                      </section>
                    </article>
                  )
                )
            : posts.map(
                ({
                  frontmatter: { title, description, category, date },
                  slug,
                }) => (
                  <article key={slug}>
                    <header className="mb-2">
                      <h3 className="mb-2">
                        <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                          <a className="text-4xl font-bold text-yellow-600 font-display">
                            {title}
                          </a>
                        </Link>
                      </h3>
                      <span
                        onClick={() => setCurrentCategory(category)}
                        className="px-2  py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded "
                      >
                        {category}
                      </span>
                      <span className="text-sm">&nbsp;&nbsp;{date}</span>
                    </header>
                    <section>
                      <p className="mb-8 text-lg">{description}</p>
                    </section>
                  </article>
                )
              )}
        </div>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
