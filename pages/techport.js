import {  SEO } from "@components/common";
import { RenderNews } from "@components/common/renderNews";
import { Lanci } from "../components/common/Lanci";

function Techport({ newsdata }) {
  return (
    <>
      <SEO
      slug="techport"
      
        title="TechPort"
        description="Benvenuti in TechPort, la risorsa della NASA per la raccolta e la condivisione di informazioni sullo sviluppo tecnologico finanziato dalla NASA. Techport consente al pubblico di scoprire le tecnologie su cui la NASA sta lavorando ogni giorno per esplorare lo spazio, comprendere l'universo e migliorare l'aeronautica. La NASA sta sviluppando tecnologie in settori come la propulsione, la nanotecnologia, la robotica e la salute umana. La NASA si impegna a rendere i suoi dati disponibili e leggibili dalla macchina attraverso un'API (Application Programming Interface) per servire meglio le sue comunità di utenti. In quanto tale, il sistema TechPort della NASA fornisce un'API di servizi Web RESTful per rendere disponibili i dati dei progetti tecnologici in un formato leggibile dalla macchina. Questa API può essere utilizzata per esportare i dati TechPort in un formato XML o JSON, che possono quindi essere ulteriormente elaborati e analizzati. La documentazione completa (in formato Swagger 2.0) degli oggetti, delle proprietà e degli URI RESTful disponibili è disponibile nella specifica dell'API online all'indirizzo:"
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className=" max-w-7xl mx-auto  px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Programmi NASA attivi nel 2021
          </h1>
          {newsdata.projects && <RenderNews ids={newsdata.projects} />}
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h3>
            <Lanci />
          </aside>
        </section>
      </div>
      </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.nasa.gov/techport/api/projects?updatedSince=2021-01-01&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
  );

  const news = await res.json();

  const newsdata = news;

  // Pass data to the page via props

  return {
    props: {
      newsdata,
    },
   
  };
}

export default Techport;
