import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";
import moment from "moment";

function Eventit({ eventi }) {
  const router = useRouter();
  console.log(eventi);

  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug="eventi-spaziali"
        title="Eventi Spaziali"
        description="Una lista di eventi spaziali futuri"
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Prossimi eventi
        </h1>
        <div>
          <div className=" max-w-7xl mx-auto  md:px-4 display flex flex-col items-start">
            {eventi.results ? (
              eventi.results?.map((lol) => {
                return (
                  <article
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                    key={lol.id}
                  >
                    <img
                      className="sm:w-full md:w-1/3 object-cover"
                      src={lol.feature_image}
                      alt={lol.titile}
                    />

                    <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 mb-4 font-display">
                        {lol.name}
                      </h1>
                      <span className="px-3 cursor-pointer py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        {moment(lol.date).format("DD-MM-YYYY")}
                      </span>
                      <p className="mt-4 text-lg mb-3">
                        <b>Location:&nbsp;</b>
                        {lol.location}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <b>Parte del programma:&nbsp;</b>
                        {lol.program[0]?.name}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <b>Descrizione:&nbsp;</b>
                        {lol.description}
                      </p>
                      <span
                        onClick={() =>
                          router
                            .push(`/eventi-spaziali/${lol.slug}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Leggi di più
                      </span>
                      &nbsp;
                      <span
                        onClick={() =>
                          router
                            .push(`/eventi-spaziali/${lol.slug}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                        className="px-3  cursor-pointer  py-2 bg-red-500 text-white text-xs font-bold uppercase rounded"
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Video
                      </span>
                    </div>
                  </article>
                );
              })
            ) : (
              <pre>{eventi.detail}</pre>
            )}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;

  const res = await fetch(`https://ll.thespacedevs.com/2.1.0/event/upcoming`);

  const news = await res.json();

  const eventi = news;

  // Pass data to the page via props

  return {
    props: {
      eventi,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
}
export default Eventit;
