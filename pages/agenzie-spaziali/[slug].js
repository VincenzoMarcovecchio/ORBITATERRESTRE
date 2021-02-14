import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { useRouter } from 'next/router';
function Page({ pageNumber, agenciesData }, props) {
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO title="Agenzie Spaziale" />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesData.results.map((data) => {
          return (
            <figure
              className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
              key={data.id}
            >
              {data.image_url && (
                <img
                  className="sm:w-full md:w-1/3 object-cover"
                  src={data.image_url}
                  alt={data.name}
                />
              )}

              <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                <h1 className="text-3xl font-bold text-yellow-600 font-display">
                  {data.name}
                </h1>
                <p className="mt-2 text-lg mb-3">
                  <b> Amministatore:</b>&nbsp;{data.amministrator}
                </p>
                <p className="mt-2 text-lg mb-3">
                  <b>Fondata nel:</b>&nbsp;{data.founding_year}
                </p>
                <p className="mt-2 text-lg mb-3">
                  <b> Descrizione:</b>&nbsp;{data.description}
                </p>
                <p className="mt-2 text-lg mb-3">
                  <b> Tipo:</b>&nbsp;{data.type}
                </p>

                <a
                  className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  href={data.wiki_url}
                  target="_blank"
                  rel="noopener noreferrer canonical"
                >
                  Scopri di piu`
                </a>
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
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.1.0/agencies/?limit=10&offset=${pageNumber}`
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
