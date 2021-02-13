import { React, useState } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';

function Page({ newsdata }) {
  return (
    <LayoutComponent>
      <SEO title="News Astronautiche Internazionali " />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {newsdata.map((lol) => {
          return (
            <article
              className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
              key={lol.id}
            >
              <img
                className="sm:w-full md:w-1/3 object-cover"
                src={lol.imageUrl}
                alt={lol.titile}
              />

              <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                <h1 className="text-3xl font-bold text-yellow-600 font-display">
                  {lol.title}
                </h1>
                <p className="mt-2 text-lg mb-3">{lol.summary}</p>

                <a
                  className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  href={lol.url}
                  target="_blank"
                  rel="noopener noreferrer canonical"
                >
                  Read more
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getStaticProps() {
  const res = await fetch('https://spaceflightnewsapi.net/api/v2/articles');

  const news = await res.json();

  const newsdata = news;

  // Pass data to the page via props

  return {
    props: {
      newsdata,
    },
  };
}
export default Page;
