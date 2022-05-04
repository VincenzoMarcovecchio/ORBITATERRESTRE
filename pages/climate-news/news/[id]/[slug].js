import { SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";
import React from "react";


export async function getServerSideProps(context) {

 // console.log(context.resolvedUrl)

  const { data } = await axios.get(`https://climate.nasa.gov${context.resolvedUrl.substring(13)}`);
  const $ = cheerio.load(data);
  const title = $(".article_title").first().text();
  const date = $(".release_date").first().text();
  const description = $("figcaption").first().html();
  const content = $(".clearfix").first().html();
  const lastScraped = new Date().toISOString();
  const image = $(".main_image").attr("src");
  return {
    props: { title, test: context.resolvedUrl, lastScraped,image : image ? image : "", content, description, date, path: context.resolvedUrl.substring(13) },
  };
}

function MarsSingle({ title, test, description, content, image, date, lastScraped, path }) {

 // console.log(test)

  React.useEffect(() => {
    let ciao = document.querySelectorAll("img")
    ciao.forEach((io, i) => {
      if (io.src.includes("https://www.orbitaterrestre.com")) {
        io.src.replace("https://www.orbitaterrestre.com", "https://climate.nasa.gov")

      }
    })
  }, [])

  return (
    <>
      <SEO
        cano="si"
        slug={`climate-news${path}`}
        title={title}
        description={description}
        imageUrl={"https://climate.nasa.gov" + image}
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
             {image &&  <img
                alt={title} height="350" width="350" src={"https://climate.nasa.gov" + image} />
              } </header>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

          </article>
        </section>
      </div>
    </>
  );
}

export default MarsSingle;


