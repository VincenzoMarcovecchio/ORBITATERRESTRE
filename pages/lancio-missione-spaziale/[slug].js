import { SEO } from "@components/common";
import { Countdown } from "../../utils/countdown";

function Polpo({ gigi }) {

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
        <article className="flex flex-col max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <figure
            className="flex mb-8 flex-col justify-between max-w-72 h-96 md:mr-4 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer w-full"
            style={{
              backgroundImage: `url(${gigi.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex justify-between items-center ml-4 pr-8">
              <div className="bg-indigo-500 bg-opacity-95 text-grey-darker bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                <Countdown
                  timeTillDate={gigi.window_end}
                  timeFormat={"YYYY MM DD, h:mm a"}
                />
              </div>
              <small className="bg-white bg-opacity-95 p-2 w-auto h-auto shadow flex flex-col-reverse text-center font-bold text-red-400 ">
                {gigi.mission.type || "non specificato"}
              </small>
            </div>
            <figcaption></figcaption>
          </figure>

          <div className="sm:w-full px-2">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {gigi.name}
            </h1>
            <p>
              <b className="font-extrabold">Lancio di tipo:</b>&nbsp;
              {gigi.mission.type}
            </p>
            <p>
              <b className="font-extrabold">Status:</b>&nbsp;
              {gigi.status.description}
            </p>
            <p>
              <b className="font-extrabold">Descrizione:</b>&nbsp;
              {gigi.mission.description}
            </p>
            <p>
              <b className="font-extrabold">Piattaforma di lancio:</b>&nbsp;
              <a href={`/piattaforma-lancio-pad/${gigi.pad.id}`}>
                {gigi.pad.name}
              </a>
            </p>
            <p className="mb-2">
              <b className="font-extrabold">Parte del programma:</b>&nbsp;
              {gigi.program}
            </p>
            <hr />
            <h3 className="mt-2 mb-2 font-extrabold text-yellow-600">
              Configurazione del missile
            </h3>
            <p>
              <b className="font-extrabold">Nome completo:&nbsp;</b>
              {gigi.rocket.configuration.full_name}
            </p>
            <p>
              <b className="">Lanci effettuati con successo:&nbsp;</b>
              {gigi.rocket.configuration.consecutive_successful_launches}
            </p>
            <p>
              <b className="font-extrabold">Lanci falliti:&nbsp;</b>
              {gigi.rocket.configuration.failed_launches}
            </p>
            <p>
              <b className="font-extrabold">Descrizione:&nbsp;</b>
              {gigi.rocket.configuration.description}
            </p>
            <p>
              <b className="font-extrabold">Diametro:&nbsp;</b>
              {gigi.rocket.configuration.diameter}
            </p>
            <p>
              <b className="font-extrabold">Lunghezza:&nbsp;</b>
              {gigi.rocket.configuration.length}
            </p>
            <p>
              <b className="font-extrabold">Massa del lancio:&nbsp;</b>
              {gigi.rocket.configuration.launch_mass}
            </p>
            <p>
              <b className="font-extrabold">Costo di un lancio:&nbsp;</b>
              {gigi.rocket.configuration.launch_cost}
            </p>
            <p className="mb-6">
              <b className="font-extrabold">Manufatturiere:&nbsp;</b>
              <a
                href={`/agenzia-spaziale/${gigi.rocket.configuration.manufacturer.id}`}
              >
                {gigi.rocket.configuration.manufacturer.name}
              </a>
            </p>
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
