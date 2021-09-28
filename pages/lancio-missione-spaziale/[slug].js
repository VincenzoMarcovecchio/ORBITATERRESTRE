import { SEO } from "@components/common";
import non from "../../content/assets/immagine-non-trovata.png";

function SingoloLancio({ newsar }) {
  console.log(newsar);

  return (
    <>
      <SEO
        title={`${newsar.results[0]?.name}`}
        cano="si"
        slug={`lancio-missione-spaziale/${newsar.results[0]?.slug}`}
        imageUrl={newsar.results[0]?.image}
        description={`${newsar.results[0]?.mission.description}`}
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {newsar.results.length ? (
          <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
            {newsar.results[0]?.image ? (
              <img
                className="sm:w-full md:w-1/3 object-cover"
                S
                src={newsar.results[0]?.image}
                alt={newsar.results[0]?.name}
              />
            ) : (
              <img
                className="sm:w-full md:w-1/3 object-cover"
                src={non}
                alt={"immagine non trovata"}
              />
            )}

            <div className="sm:w-full md:w-2/3 px-4  py-6 ">
              <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
                Lancio {newsar.results[0]?.name}
              </h1>
              <div className="flex">
                <b>Status:</b>&nbsp;
                <p className="">{newsar.results[0]?.status.abbrev}</p>
              </div>
              <div className="flex">
                <b>Descrizione:</b>&nbsp;
                <p className="">{newsar.results[0]?.status.description}</p>
              </div>
              <div className="flex">
                <b>Piattaforma di lancio:</b>&nbsp;
                <p className=""> {newsar.results[0]?.pad.name}</p>
              </div>
              <div className="flex">
                <b>Location:</b>&nbsp;
                <p>{newsar.results[0]?.location.name}</p>
              </div>
            </div>
          </article>
        ) : (
          "request throttled"
        )}
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launch/?name=&slug=${pageNumber}&rocket__configuration__name=&rocket__configuration__id=&status=&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&rocket__spacecraftflight__spacecraft__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=&mission__orbit__name=&mission__orbit__name__icontains=&r_spacex_api_id=&net__gt=&net__lt=&net__gte=&net__lte=&window_start__gt=&window_start__lt=&window_start__gte=&window_start__lte=&window_end__gt=&window_end__lt=&window_end__gte=&window_end__lte=&last_updated__gte=&last_updated__lte=`
  );

  const newsar = await res.json();

  // Pass data to the page via props

  return {
    props: {
      newsar,
    },
  };
}
export default SingoloLancio;
