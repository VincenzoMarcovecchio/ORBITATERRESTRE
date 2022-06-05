import { SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";
import React from "react";
import Image from 'next/image'


export async function getServerSideProps(context) {

 // console.log(context.resolvedUrl.substring(13))

  const { data } = await axios.get(`https://mars.nasa.gov${context.resolvedUrl.substring(13)}`);
  const $ = cheerio.load(data);
  const title = $(".article_title").first().text();
  const date = $(".release_date").first().text();
  const description = $("figcaption").first().html();
  const content = $(".clearfix").first().html();
  const lastScraped = new Date().toISOString();
  const image = $("#main_image").first().attr("src");

  return {
    props: { title, image, lastScraped, content, description, date, path: context.resolvedUrl.substring(13) },
  };
}

function MarsSingle({ title, image, description, content, date, lastScraped, path }) {



  React.useEffect(() => {
    let ciao = document.querySelectorAll("img")
    ciao.forEach((io, i) => {
      if (io.src.includes("https://www.firststepintospace.com")) {
        io.src.replace("https://www.firststepintospace.com", "https://mars.nasa.gov")

      }
    })
    
    let ciaoa = document.querySelectorAll("a")
    ciaoa.forEach((io, i) => {
      if (io.href.includes("https://www.firststepintospace.com")) {
        io.href.replace("https://www.firststepintospace.com", "https://mars.nasa.gov")

      }
    })
  }, [])

  return (
    <>
      <SEO
        cano="si"
        slug={`news-on-mars${path}`}
        title={title}
        description={description.substring(3)}
        imageUrl={"https://mars.nasa.gov" + image}
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <article className="px-4  max-w-screen-2xl">
            <header className="mb-8 mt-8">
              <h1 className="mb-2 text-4xl font-black leading-none font-display">
                {title}
              </h1>
              <time dateTime={date.substring(2)} className="text-sm">
                {date.substring(2)}
              </time>
              <img
                src={"https://mars.nasa.gov" + image}
                alt={title}
                width={450}
                height={450}
                layout="responsive"
              />


            </header>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

          </article>
        </section>
      </div>
    </>
  );
}

export default MarsSingle;


