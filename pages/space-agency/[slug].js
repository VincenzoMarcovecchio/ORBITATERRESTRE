import { SEO } from "@components/common";
import Image from 'next/image'

function Pagetwo({ agenciesDatatwo }) {

  return (
    <>
      <SEO description={agenciesDatatwo.description} title={`Agenzie Spaziale ${agenciesDatatwo.name}`} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesDatatwo.length ? (
          <figure className="flex flex-col" key={agenciesDatatwo.id}>
            <h1 className="text-3xl mb-8 font-bold text-yellow-600 font-display">
              {agenciesDatatwo.name}
            </h1>
            <Image
              src={agenciesDatatwo.logo_url}
              alt={agenciesDatatwo.name}
              width="850"
              height="650"
              layout="responsive"
            />

            <figcaption>
              <p className="mt-4">
                <b className="extra=bold">Fondata nel:</b>&nbsp;{agenciesDatatwo.founding_year}
              </p>
              <p >
                <b className="extra=bold">Tipo:</b>&nbsp;{agenciesDatatwo.type}
              </p>
              <p>
                < b className="extra=bold">Amministratore:</b>&nbsp;
                {agenciesDatatwo.administrator ||
                  "nessun amministratore trovato"}
              </p>
              <p >
                <b className="extra=bold">Nazionalità:</b>&nbsp;{agenciesDatatwo.country_code}
              </p>
              <p >
                <b className="extra=bold">Descrizione:</b>&nbsp;{agenciesDatatwo.description}
              </p>
            </figcaption>
          </figure>
        ) : (
          "caricamento supersonico suprersonico in corso..."
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponsera = await fetch(
    `https://ll.thespacedevs.com/2.2.0/agencies/${pageNumber}/`
  );

  const datap = await apiResponsera.json();

  return {
    props: {
      agenciesDatatwo: datap,
    },
  };
};

export default Pagetwo;
