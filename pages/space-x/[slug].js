import { SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";
import React from "react";
import Image from 'next/image'



export async function getServerSideProps(context) {

  console.log(context.resolvedUrl.substring(9))

  const { data } = await axios.get(`https://www.starlinkinternetbroadband.com/${context.resolvedUrl.substring(9)}`);
  const $ = cheerio.load(data);
  const title = $(".entry-title").first().text();
  const date = $(".entry-meta").first().html();
  const description = $('head > meta[property="og:description"]').attr("content");
  const content = $(".entry-content").first().html();
  const lastScraped = new Date().toISOString();
  const image = $(".attachment-full").first().attr("src");

  return {
    props: { title, image, lastScraped, content, description, date, path: context.resolvedUrl.substring(9) },
  };
}

function MarsSinglle({ title, image, description, content, date, lastScraped, path }) {



  React.useEffect(() => {


    let ciaoa = document.querySelectorAll("h2")
    ciaoa.forEach((io, i) => {
      io.style = "margin: 1rem auto;"
    })

    let ciaoaaaa = document.querySelectorAll("a")
    ciaoaaaa.forEach((io, i) => {
      io.href = "https://starlink.com"
    })

    let ciaoaa = document.querySelectorAll("h3")
    ciaoaa.forEach((io, i) => {
      io.style = "margin: 1rem auto;"
    })

    let ciaoaaa = document.querySelectorAll("time")
    ciaoaaa.forEach((io, i) => {
      io.style = "margin: 1rem auto;"
    })

  }, [])

  return (
    <>
      <SEO
        cano="si"
        slug={`space-x/${path}`}
        title={title}
        description={description}
        imageUrl={image}
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <article className="px-4  max-w-screen-2xl">
            <header className="mb-8 mt-8">
              <h1 className="mb-2 text-4xl font-black leading-none font-display">
                {title}
              </h1>
              <time dangerouslySetInnerHTML={{ __html: date }} dateTime={date.substring(2)} className="text-sm">

              </time>
              <img
                src={image}
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

export default MarsSinglle;