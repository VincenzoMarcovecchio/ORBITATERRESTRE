import { React } from "react";
import Link from "next/link";
import Img from "react-optimized-image";
import { LayoutComponent, SEO } from "@components/common";
import { RenderNews } from "@components/common/renderNews";
import { Countdown } from "../utils/countdown";
import non from "../content/assets/immagine-non-trovata.png";

function Techport({ newsdata, lanci }) {
  return (
    <LayoutComponent>
      <SEO
        title="TechPort"
        description="Benvenuti in TechPort, la risorsa della NASA per la raccolta e la condivisione di informazioni sullo sviluppo tecnologico finanziato dalla NASA. Techport consente al pubblico di scoprire le tecnologie su cui la NASA sta lavorando ogni giorno per esplorare lo spazio, comprendere l'universo e migliorare l'aeronautica. La NASA sta sviluppando tecnologie in settori come la propulsione, la nanotecnologia, la robotica e la salute umana. La NASA si impegna a rendere i suoi dati disponibili e leggibili dalla macchina attraverso un'API (Application Programming Interface) per servire meglio le sue comunità di utenti. In quanto tale, il sistema TechPort della NASA fornisce un'API di servizi Web RESTful per rendere disponibili i dati dei progetti tecnologici in un formato leggibile dalla macchina. Questa API può essere utilizzata per esportare i dati TechPort in un formato XML o JSON, che possono quindi essere ulteriormente elaborati e analizzati. La documentazione completa (in formato Swagger 2.0) degli oggetti, delle proprietà e degli URI RESTful disponibili è disponibile nella specifica dell'API online all'indirizzo:"
      />{" "}
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className=" max-w-7xl mx-auto  px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Programmi NASA attivi nel 2021
          </h1>
          <RenderNews ids={newsdata.projects} />
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h3>
            <div className="px-4 flex flex-col">
              {lanci ? (
                lanci?.results?.map((la) => {
                  return (
                    <figure
                      key={la.launch_service_provider.name}
                      className=" relative w-full shadow-lg  mb-8 md:max-w-md"
                    >
                      <Countdown
                        timeTillDate={la.window_end}
                        timeFormat={"YYYY MM DD, h:mm a"}
                      />
                      {la.image ? (
                        <Img
                          layout="fill"
                          className=" max-h-35 w-full"
                          src={la.image}
                          alt={la.name}
                        />
                      ) : (
                        <Img
                          layout="fill"
                          className=" max-h-35 w-full"
                          src={non}
                          alt={la.name}
                        />
                      )}

                      <figcaption className="z-20 p-2">
                        <div className="flex">
                          <b>Agenzia Spaziale:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/agenzie-spaziali/singola/${la.launch_service_provider.id}`}
                          >
                            {la.launch_service_provider.name}
                          </Link>
                        </div>
                        <div className="flex">
                          <b>Dove:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/piattaforme-lancio-pad/${la.pad.id}`}
                          >
                            {la.pad.name}
                          </Link>
                        </div>
                        <div className="flex">
                          <b>Nome Missione:&nbsp;</b>
                          <Link className="z-20" href={`/#`}>
                            {la.mission?.name}
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  );
                })
              ) : (
                <b>{lanci.detail || "errore nel caricamento"}</b>
              )}
              <div>
                <Link href={`/lanci-di-missioni-spaziali`}>
                  Scopri di piu` sui lanci
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.nasa.gov/techport/api/projects?updatedSince=2021-01-01&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
  );

  const resa = await fetch(
    `https://ll.thespacedevs.com/2.0.0/launch/upcoming?limit=10&offset=10`
  );

  const lanci = await resa.json();

  const news = await res.json();

  const newsdata = news;

  // Pass data to the page via props

  return {
    props: {
      newsdata,
      lanci,
    },
  };
}

export default Techport;
