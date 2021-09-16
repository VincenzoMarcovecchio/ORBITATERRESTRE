import React from "react";

function Piattaformalo({ pad }) {
 console.log(pad)
  return (
    <LayoutComponent>
      <SEO
        description={`${pad.results[0]?.name}, ${pad.results[0]?.location.name}`}
        title={`Piattaforma di lancio ${pad.results[0]?.name}`}
      />
      {pad.results.length > 0 ? (
        <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
            {pad.results[0]?.name},&nbsp;{pad.results[0]?.location.name}
          </h1>
          <h2>
            Totale lanci effetuati:&nbsp;{pad.results[0]?.total_launch_count}
          </h2>
          <h2>Latitudine:&nbsp;{pad.results[0]?.latitude}</h2>
          <h2>Longitudine:&nbsp;{pad.results[0]?.longitude}</h2>
          <h2>Wikipedia:&nbsp;{pad.results[0]?.wiki_url}</h2>

          <img src={pad.results[0]?.map_image} alt={pad.results[0]?.name} />
        </div>
      ) : (
        "errore nel caricamento (bisognerebbe supportare i ragazzi at the spacedevs)"
      )}
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/pad/?location=${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
    },
  };
};

export default Piattaformalo;
