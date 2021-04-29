import { React, useState, useEffect } from "react";
import Link from "next/link";
import non from "../../content/assets/immagine-non-trovata.png";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function Pagetwo({ agenciesDatatwo }) {
  console.log(agenciesDatatwo);
  return (
    <LayoutComponent>
      <SEO title={`Agenzie Spaziale ${agenciesDatatwo.results} `} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesDatatwo.results
          ? agenciesDatatwo?.results?.map((data) => {
              return (
                <figure
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                  key={data.id}
                ></figure>
              );
            })
          : "errore nel caricamento supersonico..."}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex  items-center"></div>
      </div>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = Number.parseInt(pageContext.query.slug);
  console.log(pageNumber);
  const apiResponser = await fetch(
    `https://ll.thespacedevs.com/2.2.0/agencies/${pageNumber}`
  );

  const datap = await apiResponser.json();

  return {
    props: {
      agenciesDatatwo: datap,
    },
  };
};

export default Pagetwo;
