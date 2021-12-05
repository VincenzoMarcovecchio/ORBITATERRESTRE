import { SEO } from "@components/common";

function Polpo({ gigi }) {
  console.log(gigi);
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
            src={gigi.image || `/immagine-non-trovata.png`}
            alt={gigi.name}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {gigi.name}
            </h1>
            <p>
              <b>Lancio di tipo:</b>&nbsp;
              {gigi.mission.type}
            </p>
            <p>
              <b>Status:</b>&nbsp;
              {gigi.status.description}
            </p>
            <p>
              <b>Descrizione:</b>&nbsp;
              {gigi.mission.description}
            </p>
            <p>
              <b>Piattaforma di lancio:</b>&nbsp;
              <a href={`/piattaforma-lancio-pad/${gigi.pad.id}`}>
                {gigi.pad.name}
              </a>
            </p>
            <p>
              <b>Parte del programma:</b>&nbsp;
              {gigi.program}
            </p>
            <details>
              <summary>Configuarazione del missile:</summary>
              <p>
                <b>Nome completo:&nbsp;</b>
                {gigi.rocket.configuration.full_name}
              </p>
              <p>
                <b>Lanci effettuati con successo:&nbsp;</b>
                {gigi.rocket.configuration.consecutive_successful_launches}
              </p>
              <p>
                <b>Lanci falliti:&nbsp;</b>
                {gigi.rocket.configuration.failed_launches}
              </p>
              <p>
                <b>Descrizione:&nbsp;</b>
                {gigi.rocket.configuration.description}
              </p>
              <p>
                <b>Diametro:&nbsp;</b>
                {gigi.rocket.configuration.diamater}
              </p>
              <p>
                <b>Lunghezza:&nbsp;</b>
                {gigi.rocket.configuration.length}
              </p>
              <p>
                <b>Massa del lancio:&nbsp;</b>
                {gigi.rocket.configuration.launch_mass}
              </p>
              <p>
                <b>Costo di un lancio:&nbsp;</b>
                {gigi.rocket.configuration.Launch_cost}
              </p>
              <p>
                <b>Manufatturiere:&nbsp;</b>
                <a
                  href={`/agenzia-spaziale/${gigi.rocket.configuration.manufacturer.id}`}
                >
                  {gigi.rocket.configuration.manufacturer.name}
                </a>
              </p>
        
            </details>
          </div>
        </article>
       
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumbera = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launch/${pageNumbera}/`
  );

  const gigi = await res.json();

  // Pass data to the page via props

  return {
    props: {
      gigi,
    },
  };
}
export default Polpo;
