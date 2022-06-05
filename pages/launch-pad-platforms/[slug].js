import {  SEO } from "@components/common";
import React from "react"

function Piattaformalo({ pad }) {

  return (
    <>
      <SEO
        cano="si"
        slug={`launch-pad-platforms/${pad.results[0]?.id}`}
        imageUrl={pad.results[0]?.map_image}
        description={`${pad.results[0]?.name}, ${pad.results[0]?.location.name}`}
        title={`Launch platform ${pad.results[0]?.name}`}
      />
      {pad.results ? (
        <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
            {pad.results[0]?.name},&nbsp;{pad.results[0]?.location.name}
          </h1>
          <h2  className="font-extrabold"> 
            Total launches:&nbsp;{pad.results[0]?.total_launch_count}
          </h2>
          <h2  className="font-extrabold">Latitude:&nbsp;{pad.results[0]?.latitude}</h2>
          <h2  className="font-extrabold">Longitude:&nbsp;{pad.results[0]?.longitude}</h2>
          <h2  className="font-extrabold">
            Wikipedia:&nbsp;
            <a
              href={pad.results[0]?.wiki_url ? pad.results[0]?.wiki_url : "" }
              rel="canonical noopener noreferrer"
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
       <p>Request was throttled</p>
      )}
    </>
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
