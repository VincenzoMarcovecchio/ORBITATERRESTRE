import { SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";

export async function getServerSideProps(context) {

  console.log(context.query.id)

  const { data } = await axios.get(`https://svs.gsfc.nasa.gov/${context.query.id}`);
  const $ = cheerio.load(data);
  const title = $("h1").first().text();
  const date = $(".col-xs-9 .byline-sm").first().text();
  const description = $(".abstractwrapper").first().text().substring(0, 180);
  const content = $(".container").first().html();
  const credit = $("h4 > div > .col-sm-7.col-xs-12").first().html();
  const lastScraped = new Date().toISOString();

  return {
    props: { title, lastScraped, credit, content, description, date, path: context.query.id },
  };

}

function MarsSingles({ title, description, content, credit, date, lastScraped, path }) {
  console.log(content)
  return (
    <>
      <style>
        {`      .form {
        display:none;
      }`}
      </style>
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
              <time dateTime={date.substring(2)} className="text-sm">
                {date.substring(2)}
              </time>
            </header>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div dangerouslySetInnerHTML={{ __html: credit }}></div>
          </article>
        </section>
      </div>
    </>
  );
}

export default MarsSingles;


