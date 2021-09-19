
import Link from "next/link";
import {  SEO } from "@components/common";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import non from "../content/assets/immagine-non-trovata.png";

function NasaLive() {
  const url =
    "https://mimmofranco.herokuapp.com/https://ll.thespacedevs.com/2.1.0/event/upcoming";

  const { data, error } = useSWR(url, fetcher);

  return (
  <>
      <SEO
        title="Nasa Live "
        description="La TV della NASA trasmette una varietà di programmi educativi e di pubbliche relazioni regolarmente programmati e preregistrati 24 ore al giorno sui suoi vari canali. La rete fornisce anche una serie di programmi in diretta, come la copertura di missioni, eventi (passeggiate nello spazio, interviste ai media, trasmissioni educative), conferenze stampa e lanci di razzi."
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            La TV della NASA
          </h2>
          <iframe
            style={{ width: "100%" }}
            width="760"
            height="515"
            src="https://www.youtube.com/embed/21X5lGlDOfg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="flex ">
          <aside>
            <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Eventi
            </h3>
            <div className="px-4 flex flex-col">
              {data != undefined ? (
                data.results.map((la) => {
                  return (
                    <figure
                      key={la.date}
                      className=" relative w-full shadow-lg  mb-8 md:max-w-md"
                    >
                      {la.featured_image ? (
                        <img
                          loading="lazy"
                          className=" max-h-35 w-full"
                          src={featured_image}
                          alt={la.name}
                        />
                      ) : (
                        <img
                          className=" max-h-35 w-full"
                          src={non}
                          alt={la.name}
                        />
                      )}

                      <figcaption className="z-20 p-2">
                        <div className="flex ">
                          <b>Nome:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.name}
                          </Link>
                        </div>
                        <div className="flex flex-col">
                          <b>Descrizione:&nbsp;</b>

                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.description}
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  );
                })
              ) : (
                <b>{"caricamento supersonico in corso..."}</b>
              )}
            </div>
          </aside>
        </section>
      </div>
 </>
  );
}

export default NasaLive;
