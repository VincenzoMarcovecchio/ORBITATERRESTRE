import { useState } from "react";
import Link from "next/link";
import { SEO } from "@components/common";
import { useRouter } from "next/router";

function Page({ agenciesData, pageNumber }) {
  const router = useRouter();

  const [type, setType] = useState(1);

  const set = [
    "Governative",
    "Multinazionali",
    "Commerciali",
    "Educazionali",
    "Private",
    "Sconosciute",
  ];

  return (
    <>
      <SEO
        title="Agenzie Spaziali"
        description="Una lista di agenzie che si occupano di missioni nello spazio"
      />
      <h1 className="text-4xl text-center mb-8 font-bold text-yellow-600 font-display mt-8 mx-auto ">
        Dataset delle agenzie spaziali
      </h1>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 display flex flex-wrap sm:flex-col md:flex-row w-full items-start">
        {set.map((se, index) => (
          <span
            className={`${
              type === index
                ? " underline flex-wrap border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
                : "m-1.5 flex-wrap cursor-pointer px-4  py-4 shadow-lg"
            }`}
            onClick={() => setType(index)}
          >
            {se}
          </span>
        ))}
      </div>
      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {!agenciesData && "errore nel caricamento"}
        {agenciesData && type === 0
          ? agenciesData.results
              .filter((agency) => agency.type === "Government")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={data.image_url}
                        alt={data.name}
                      />
                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-4 text-lg">
                        <b> Amministatore:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className="mt-2 text-lg ">
                        <b>Fondata nel:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Descrizione:</b>&nbsp;{data.description}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Tipo:</b>&nbsp;{data.type}
                      </p>

                      <span
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        onClick={() =>
                          router
                            .push(`/eventi-spaziali/${lol.slug}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                      >
                        Scopri di più
                      </span>
                    </figcaption>
                  </figure>
                );
              })
          : type === 1
          ? agenciesData.results
              .filter((agency) => agency.type === "Multinational")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={data.image_url}
                        alt={data.name}
                      />
                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-4 text-lg">
                        <b> Amministatore:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className="mt-2 text-lg">
                        <b>Fondata nel:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Descrizione:</b>&nbsp;{data.description}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Tipo:</b>&nbsp;{data.type}
                      </p>

                      <Link
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        href={`/agenzia-spaziale/${data.id}/`}
                        replace
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Scopri di più
                      </Link>
                    </figcaption>
                  </figure>
                );
              })
          : type === 2
          ? agenciesData.results
              .filter((agency) => agency.type === "Commercial")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={data.image_url}
                        alt={data.name}
                      />
                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-2 text-lg">
                        <b> Amministatore:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className="mt-2 text-lg">
                        <b>Fondata nel:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Descrizione:</b>&nbsp;{data.description}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Tipo:</b>&nbsp;{data.type}
                      </p>

                      <Link
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        href={`/agenzia-spaziale/${data.id}/`}
                        replace
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Scopri di più
                      </Link>
                    </figcaption>
                  </figure>
                );
              })
          : type === 3
          ? agenciesData.results
              .filter((agency) => agency.type === "Educational")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={data.image_url}
                        alt={data.name}
                      />
                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-4 text-lg">
                        <b> Amministatore:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className="mt-2 text-lg">
                        <b>Fondata nel:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Descrizione:</b>&nbsp;{data.description}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Tipo:</b>&nbsp;{data.type}
                      </p>

                      <Link
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        href={`/agenzia-spaziale/${data.id}/`}
                        replace
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Scopri di più
                      </Link>
                    </figcaption>
                  </figure>
                );
              })
          : type === 4
          ? agenciesData.results
              .filter((agency) => agency.type === "private")
              .map((data) => {
                return (
                  <>
                    {data.id && (
                      <figure
                        className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                        key={data.id}
                      >
                        {data.image_url ? (
                          <img
                            className="sm:w-full md:w-1/3 object-cover"
                            src={data.image_url}
                            alt={data.name}
                          />
                        ) : (
                          <img
                            className="sm:w-full md:w-1/3 object-cover"
                            src={`/immagine-non-trovata.png`}
                            alt={data.name}
                          />
                        )}

                        <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                          <h1 className="text-3xl font-bold text-yellow-600 font-display">
                            {data.name}
                          </h1>
                          <p className="mt-4 text-lg ">
                            <b> Amministatore:</b>&nbsp;{data.amministrator}
                          </p>
                          <p className="mt-2 text-lg ">
                            <b>Fondata nel:</b>&nbsp;{data.founding_year}
                          </p>
                          <p className="mt-2 text-lg ">
                            <b> Descrizione:</b>&nbsp;{data.description}
                          </p>
                          <p className="mt-2 text-lg ">
                            <b> Tipo:</b>&nbsp;{data.type}
                          </p>

                          <Link
                            className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                            href={`/agenzia-spaziale/${data.id}/`}
                            replace
                            target="_blank"
                            rel="noopener noreferrer canonical"
                          >
                            Scopri di più
                          </Link>
                        </figcaption>
                      </figure>
                    )}
                  </>
                );
              })
          : type === 5
          ? agenciesData.results
              .filter((agency) => agency.type === "Unknown")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={data.image_url}
                        alt={data.name}
                      />
                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-4 text-lg">
                        <b> Amministatore:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className="mt-2 text-lg">
                        <b>Fondata nel:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Descrizione:</b>&nbsp;{data.description}
                      </p>
                      <p className="mt-2 text-lg">
                        <b> Tipo:</b>&nbsp;{data.type}
                      </p>

                      <Link
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        href={`/agenzia-spaziale/${data.id}/`}
                        replace
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Scopri di più
                      </Link>
                    </figcaption>
                  </figure>
                );
              })
          : agenciesData.results.map((data) => {
              return (
                <figure
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                  key={data.id}
                >
                  {data.image_url ? (
                    <img
                      className="sm:w-full md:w-1/3 object-cover"
                      src={data.image_url}
                      alt={data.name}
                    />
                  ) : (
                    <img
                      className="sm:w-full md:w-1/3 object-cover"
                      src={`/immagine-non-trovata.png`}
                      alt={data.name}
                    />
                  )}

                  <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                    <h1 className="text-3xl font-bold text-yellow-600 font-display">
                      {data.name}
                    </h1>
                    <p className="mt-4 text-lg ">
                      <b> Amministatore:</b>&nbsp;{data.amministrator}
                    </p>
                    <p className="mt-2 text-lg ">
                      <b>Fondata nel:</b>&nbsp;{data.founding_year}
                    </p>
                    <p className="mt-2 text-lg ">
                      <b> Descrizione:</b>&nbsp;{data.description}
                    </p>
                    <p className="mt-2 text-lg ">
                      <b> Tipo:</b>&nbsp;{data.type}
                    </p>

                    <Link
                      className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      href={`/agenzia-spaziale/${data.id}/`}
                      replace
                      target="_blank"
                      rel="noopener noreferrer canonical"
                    >
                      Scopri di più
                    </Link>
                  </figcaption>
                </figure>
              );
            })}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex  items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              if (pageNumber > 10) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router
                  .push(`/agenzie-spaziali/${pageNumber - 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Pagina Precedente&nbsp;&nbsp;&nbsp;&nbsp;
          </div>

          <div>#{pageNumber}</div>

          <div
            className="cursor-pointer"
            onClick={() => {
              if (pageNumber < 200) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router
                  .push(`/agenzie-spaziali/${pageNumber + 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Pagina Successiva
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.1.0/agencies/?limit=200&offset=${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      agenciesData: data,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Page;
