import { React, useState, useEffect } from "react";
import Link from "next/link";
import non from "../../content/assets/immagine-non-trovata.png";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function Pagetwo({ agenciesDatatwo }) {

  return (
    <LayoutComponent>
      <SEO description={agenciesDatatwo.description} title={`Agenzie Spaziale ${agenciesDatatwo.results}`} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesDatatwo ? (
          <figure className="flex flex-col" key={agenciesDatatwo.id}>
            <h1 className="text-3xl mb-8 font-bold text-yellow-600 font-display">
              {agenciesDatatwo.name}
            </h1>
            <img src={agenciesDatatwo.logo_url} alt={agenciesDatatwo.name} />
            <figcaption>
              <p className="mt-2 text-lg mb-3">
                <b>Fondata nel:</b>&nbsp;{agenciesDatatwo.founding_year}
              </p>
              <p className="mt-2 text-lg mb-3">
                <b>Tipo:</b>&nbsp;{agenciesDatatwo.type}
              </p>
              <p className="mt-2 text-lg mb-3">
                <b>Amministratore:</b>&nbsp;
                {agenciesDatatwo.administrator ||
                  "nessun amministratore trovato"}
              </p>
              <p className="mt-2 text-lg mb-3">
                <b>Nazionalità:</b>&nbsp;{agenciesDatatwo.country_code}
              </p>
              <p className="mt-2 text-lg mb-3">
                <b>Descrizione:</b>&nbsp;{agenciesDatatwo.description}
              </p>
            </figcaption>
          </figure>
        ) : (
          "caricamento supersonico suprersonico in corso..."
        )}
      </div>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  console.log(pageNumber);
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
