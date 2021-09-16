import React from "react";
import { LayoutComponent } from "../../components/common/Layout/Layout";
import { SEO } from "../../components/common/Seo/index";

function Piattaformalo({ pal }) {
  console.log(pal);
  return (
    <LayoutComponent>
      <SEO
        description={`${pal.results.name}, ${pal.results.location.name}`}
        title={`Piattaforma di lancio ${pal.results.name}`}
      />
      {pal.results ? (
        <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
            {pal.results.name},&nbsp;{pal.results.location.name}
          </h1>
          <h2>Totale lanci effetuati:&nbsp;{pal.results.total_launch_count}</h2>
          <h2>Latitudine:&nbsp;{pal.results.latitude}</h2>
          <h2>Longitudine:&nbsp;{pal.results.longitude}</h2>
          <h2>Wikipedia:&nbsp;{pal.results.wiki_url}</h2>

          <img src={pal.results.map_image} alt={pal.results.name} />
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
      pal: data,
    },
  };
};

export default Piattaformalo;
