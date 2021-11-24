import { SEO } from "@components/common";


function Polpo({ gigi }) {
  
//resr
  return (
    <>
      <SEO
        title={gigi.results[0]?.name}
        cano="si"
        slug={`lancio-missione-spaziale/${gigi.results[0]?.slug} `}
        imageUrl={gigi.results[0]?.image}
        description={`${gigi.results[0]?.status.description}`}
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            className="sm:w-full md:w-1/3 object-cover"
            src={gigi.results[0]?.image ||  `/immagine-non-trovata.png`}
            alt={gigi.results[0]?.name}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {gigi.results[0]?.name}
            </h1>
            <div className="flex">
              <b>Status:</b>&nbsp;
              <p className="">{gigi.results[0]?.status.abbrev}</p>
            </div>
            <div className="flex">
              <b>Descrizione:</b>&nbsp;
              <p className="">{gigi.results[0]?.status.description}</p>
            </div>
            <div className="flex">
              <b>Piattaforma di lancio:</b>&nbsp;
              <p> {gigi.results[0]?.pad.name}</p>
            </div>
            <div className="flex">
              <b>Location:</b>&nbsp;
              <p>{gigi.results[0]?.location.name}</p>
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
    `https://ll.thespacedevs.com/2.2.0/launch/${pageNumbera}`)

  const gigi = await res.json();

  // Pass data to the page via props

  return {
    props: {
      gigi,
    },
  };
}
export default Polpo;
