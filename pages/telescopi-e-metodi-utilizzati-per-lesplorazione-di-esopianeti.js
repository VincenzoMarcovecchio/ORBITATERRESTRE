import {  SEO } from "@components/common";
import cheerio from "cheerio";
import axios from "axios";

function Telescopi({ title, lastScraped }) {
  return (
    <>
      <SEO
        title="Nasa Live "
        description="La TV della NASA trasmette una varietà di programmi educativi e di pubbliche relazioni regolarmente programmati e preregistrati 24 ore al giorno sui suoi vari canali. La rete fornisce anche una serie di programmi in diretta, come la copertura di missioni, eventi (passeggiate nello spazio, interviste ai media, trasmissioni educative), conferenze stampa e lanci di razzi."
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
