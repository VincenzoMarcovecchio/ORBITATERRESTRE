import { SEO } from "@components/common";
import non from "../../content/assets/immagine-non-trovata.png";

function Polpo({ gigi }) {
  const [newsar, setNews] = useState(gigi);
  console.log(newsar);

  return (
    <>
      <SEO
        title={newsar.name}
        cano="si"
        slug={`lancio-missione-spaziale/${newsar.id} `}
        imageUrl={newsar.image}
        description={`${newsar.status.description}`}
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            className="sm:w-full md:w-1/3 object-cover"
            src={newsar.image || non}
            alt={newsar.name}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {newsar.name}
            </h1>
            <div className="flex">
              <b>Status:</b>&nbsp;
              <p className="">{newsar.status.abbrev}</p>
            </div>
            <div className="flex">
              <b>Descrizione:</b>&nbsp;
              <p className="">{newsar.status.description}</p>
            </div>
            <div className="flex">
              <b>Piattaforma di lancio:</b>&nbsp;
              <p className=""> {newsar.pad.name}</p>
            </div>
            <div className="flex">
              <b>Location:</b>&nbsp;
              <p>{newsar.location.name}</p>
            </div>
          </div>
        </article>
        ) : ( <p className="">"request throttled"</p> )
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
