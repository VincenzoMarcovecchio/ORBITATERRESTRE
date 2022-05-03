import {  SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";

export async function getServerSideProps(context) {
console.log(context.query.slug)
  const { data } = await axios.get(`https://mars.nasa.gov${context.query.slug}`);
  const $ = cheerio.load(data);
  const title = $(".article_title").innerText();
  const lastScraped = new Date().toISOString();
  return {
    props: { title, lastScraped,context },
  };
}

function MarsSingle({ title, lastScraped,context }) {
  console.log(context)
  return (
    <>
      <SEO
        title=" "
        description=""
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <div dangerouslySetInnerHTML={{ __html: title }}></div>
          <p>{lastScraped}</p>
        </section>
      </div>
      </>
  );
}

export default MarsSingle;


