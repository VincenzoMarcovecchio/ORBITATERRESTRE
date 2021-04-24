import { React, useState, useEffect } from "react";
import Link from "next/link";
import non from "../../../content/assets/immagine-non-trovata.png";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function Pagetwo({ agenciesDatatwo }) {
  return (
    <LayoutComponent>
      <SEO title={`Agenzie Spaziale ${agenciesDatatwo.results} `} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {/* {agenciesDatatwo.results.map((data) => {
          return (
            <figure
              className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
              key={data.id}
            ></figure>
          );
        })} */}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex  items-center"></div>
      </div>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/agencies/${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      agenciesDatatwo: data,
      pageNumbertwo: Number.parseInt(pageNumber),
    },
  };
};

export default Pagetwo;
