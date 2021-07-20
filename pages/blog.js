import { React, useState } from "react";
import Link from "next/link";
import { LayoutComponent,  SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";
import moment from "moment";
function Blog({ posts }) {
  const [currentCategory, setCurrentCategory] = useState(null);

  let categories = [];

  for (let i = 0; i < posts.length; i++) {
    categories.push(posts[i].frontmatter.category);
  }

  let merged = [].concat.apply([], categories);

  const uniquecat = [...new Set(merged)];

  return (
    <LayoutComponent>
      <SEO title="Il blog " description="Notizie e news dallo spazio" />

      <div className="w-full md:max-w-8xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <div className="display flex mb-8 mt-4 space-x-2 md:space-x-8">
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
        <div className="w-full md:max-w-md mx-auto display flex flex-col items-start">
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
                          <Link href={"/post/[slug]"} as={`/post/${slug}`}>
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
                        <time datetime={date} className="text-sm">&nbsp;&nbsp;{moment(date).format('YYYY-MM-DD')}</time>
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
                        <Link href={"/post/[slug]"} as={`/post/${slug}`}>
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
                      <time datetime={date} className="text-sm">&nbsp;&nbsp;{moment(date).format('YYYY-MM-DD')}</time>
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

export default Blog;

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
