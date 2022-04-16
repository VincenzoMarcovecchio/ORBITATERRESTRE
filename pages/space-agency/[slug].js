import { SEO } from "@components/common";
import Image from 'next/image'

function Pagetwo({ agenciesDatatwo }) {
console.log(agenciesDatatwo)
  return (
    <>
      <SEO description={agenciesDatatwo.description} title={`${agenciesDatatwo.name}`} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesDatatwo ? (
          <figure className="flex flex-col" key={agenciesDatatwo.id}>
            <h1 className="text-3xl mb-8 font-bold text-yellow-600 font-display">
              {agenciesDatatwo.name}
            </h1>
            <Image
              className="mb-4 emma sm:h-full md:h-5/6 object-cover flex"
              src={agenciesDatatwo.logo_url}
              alt={agenciesDatatwo.name}
              width="150"
              height="150"
              layout="intrinsic"
            />

            <figcaption>
              <p className="mt-14">
                <b className="font-extrabold">Founded:</b>&nbsp;{agenciesDatatwo.founding_year}
              </p>
              <p >
                <b className="font-extrabold">Type:</b>&nbsp;{agenciesDatatwo.type}
              </p>
              <p>
                < b className="font-extrabold">Administrator:</b>&nbsp;
                {agenciesDatatwo.administrator ||
                  "none"}
              </p>
              <p >
                <b className="font-extrabold">Nationality:</b>&nbsp;{agenciesDatatwo.country_code}
              </p>
              <p >
                <b className="font-extrabold">Description:</b>&nbsp;{agenciesDatatwo.description}
              </p>
            </figcaption>
          </figure>
        ) : (
          "failed to load"
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
