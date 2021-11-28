import { SEO } from "@components/common";


function Polpo({ gigi }) {
  
console.log(gigi)
  return (
    <>
      <SEO
        title={gigi.name}
        cano="si"
        slug={`lancio-missione-spaziale/${gigi.id} `}
        imageUrl={gigi.image}
        description={`${gigi.mission.description}`}
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            className="sm:w-full md:w-1/3 object-cover"
            src={gigi.image ||  `/immagine-non-trovata.png`}
            alt={gigi.name}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {gigi.name}
            </h1>
            <div className="flex">
              <b>Status:</b>&nbsp;
              <p className="">{gigi.status.description}</p>
            </div>
            <div className="flex">
              <b>Descrizione:</b>&nbsp;
              <p className="">{gigi.mission.description}</p>
            </div>
            <div className="flex">
              <b>Piattaforma di lancio:</b>&nbsp;
              <a href={`/piattaforma-lancio-pad/${gigi.pad.id}`  }> {gigi.results[0]?.pad.name}</a>
            </div>
            <div className="flex">
              <b>Parte del programma:</b>&nbsp;
              <pre>{gigi.progrm}</pre>
            </div>
          </div>
        </article>
        ) : ( <p>"request throttled"</p> )
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumbera = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launch/${pageNumbera}/`)

  const gigi = await res.json();

  // Pass data to the page via props

  return {
    props: {
      gigi,
    },
  };
}
export default Polpo;
