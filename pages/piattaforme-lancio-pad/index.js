import React from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";
import nontrovata from "../../content/assets/immagine-non-trovata.png";

function Piattaforme({ pad }) {
  console.log(pad);
  return (
    <LayoutComponent>
      <SEO title="Piattaforme di lancio" />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {}
        {/* <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
          {pad.results[0]?.name},&nbsp;{pad.results[0]?.location.name}
        </h1>
        <h2>
          Totale lanci effetuati:&nbsp;{pad.results[0]?.total_launch_count}
        </h2>
        <h2>Latitudine:&nbsp;{pad.results[0]?.latitude}</h2>
        <h2>Longitudine:&nbsp;{pad.results[0]?.longitude}</h2>

        <img
          src={pad.results[0]?.map_image || nontrovata}
          alt={pad.results[0]?.name}
        /> */}
      </div>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(`https://ll.thespacedevs.com/2.2.0/pad`);

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
    },
  };
};

export default Piattaforme;
