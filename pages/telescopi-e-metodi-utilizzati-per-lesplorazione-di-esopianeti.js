import {  SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";

function Telescopi({ title, lastScraped }) {
  return (
    <>
      <SEO
        title="Telescopi e metodi di riconoscimento "
        description="Telescopi e metodi di individuazione"
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

export default Telescopi;

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://it.wikipedia.org/wiki/Metodi_di_individuazione_di_pianeti_extrasolari"
  );
  const $ = cheerio.load(data);
  const title = $("#content").html();
  const lastScraped = new Date().toISOString();
  return {
    props: { title, lastScraped },
    revalidate: 40000, // rerun after 10 seconds
  };
}
