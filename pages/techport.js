import { SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

function Techport({ ciao }) {
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
          {ciao.length > 2 ? (
            ciao.map((ar) => {
              return (
                <article
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                  key={ar.project?.projectId}
                >
                  <div className=" px-4  py-6 ">
                    <h1 className="text-3xl mb-4 font-bold text-yellow-600 font-display">
                      {ar.project?.title}
                    </h1>
                    <div className="flex">
                      <b>Anno di inizio:&nbsp;</b>
                      <p>{ar.project?.startYear}</p>
                    </div>
                    <div className="flex">
                      <b>Fine:&nbsp;</b>
                      <p>{ar.project?.endDateString}</p>
                    </div>
                    <div
                      className="mt-2 text-lg mb-3"
                      dangerouslySetInnerHTML={{
                        __html: ar.project?.description,
                      }}
                    ></div>
                    <a
                      href={ar.project?.website}
                      className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      target="_blank"
                      rel="noopener noreferrer canonical"
                    >
                      {ar.project?.website
                        ? " Leggi di piu"
                        : "nessun sito trovato"}
                    </a>
                  </div>
                </article>
              );
            })
          ) : (
            <p>Caricamento supersonico in corso...</p>
          )}
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
  const fetchData = async () => {
    const res = await fetch(
      `https://api.nasa.gov/techport/api/projects?updatedSince=2021-01-01&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
    );

    const newsdata = await res.json();

    let via;

    newsdata.projects &&
      Promise.all(
        newsdata.projects.map((url) =>
          fetch(
            `https://api.nasa.gov/techport/api/projects/${url.projectId}?api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
          )
        )
      )
        .then((resp) => Promise.all(resp.map((r) => r.json())))
        .then((result) => {
          via = result;
        });

    return via;
  };

  const ciao = await fetchData();

  return {
    props: {
      ciao,
    },
  };
}

export default Techport;
