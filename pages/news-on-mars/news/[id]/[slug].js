import {  SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";
import React from "react";


export async function getServerSideProps(context) {

console.log(context.resolvedUrl.substring(13))

  const { data } = await axios.get(`https://mars.nasa.gov${context.resolvedUrl.substring(13)}`);
  const $ = cheerio.load(data);
  const title = $(".article_title").first().text();
  const date = $(".release_date").first().text();
  const description = $("figcaption").first().html();
  const content = $(".clearfix").first().html();
  const lastScraped = new Date().toISOString();
  return {
    props: { title, lastScraped,content,description,date, path:context.resolvedUrl.substring(13)},
  };
}

function MarsSingle({ title,description,content, date, lastScraped,path }) {

console.log(content)

React.useEffect(() => {
  let ciao = document.querySelectorAll("img")
  ciao.forEach((io, i) => {
    if (io.src.includes(".jpg")) {
      io.src="https://mars.nasa.gov".concat(io.src)
    }
  })
}, [])

  return (
    <>
      <SEO
      cano="si"
      slug={`news-on-mars${path}`}
        title={title}
        description={description}
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
        <article className="px-4  max-w-screen-2xl">
        <header className="mb-8 mt-8">
          <h1 className="mb-2 text-4xl font-black leading-none font-display">
            {title}
          </h1>
          <time datetime={date.substring(2)} className="text-sm">
            {date.substring(2)}
          </time>
        </header>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
         
          </article>
        </section>
      </div>
      </>
  );
}

export default MarsSingle;


