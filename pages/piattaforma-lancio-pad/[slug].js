import React from "react";
import { LayoutComponent, SEO } from "@components/common";

function Piattaformalo({ pad }) {
  console.log(pad);
  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug={`piattaforma-lancio-pad/${pad.results[0]?.id}`}
        imageUrl={pad.results[0]?.map_image}
        description={`${pad.results[0]?.name}, ${pad.results[0]?.location.name}`}
        title={`Piattaforma di lancio ${pad.results[0]?.name}`}
      />
      {pad.results ? (
        <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
            {pad.results[0]?.name},&nbsp;{pad.results[0]?.location.name}
          </h1>
          <h2>
            Totale lanci effetuati:&nbsp;{pad.results[0]?.total_launch_count}
          </h2>
          <h2>Latitudine:&nbsp;{pad.results[0]?.latitude}</h2>
          <h2>Longitudine:&nbsp;{pad.results[0]?.longitude}</h2>
          <h2>
            Wikipedia:&nbsp;
            <a
              href={pad.results[0]?.wiki_url}
              rel="caninocal noopener noreferrer"
              target="__blank"
            >
              link
            </a>
          </h2>

          <img
            className="mt-4"
            src={pad.results[0]?.map_image}
            alt={pad.results[0]?.name}
          />
        </div>
      ) : (
        "errore nel caricamento (bisognerebbe supportare i ragazzi at the spacedevs)"
      )}
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = Number(pageContext.query.slug);

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/pad/?name=&id=${pageNumber}&location=`
  );

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
    },
  };
};

export default Piattaformalo;
