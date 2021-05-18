import { React, useState } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

function SingoloLancio({ newsar }) {
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO title={`${newsar.name}`} description={`${newsar.mission}`} />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          {lol.newsar ? (
            <img
              className="sm:w-full md:w-1/3 object-cover"
              src={newsar.image}
              alt={newsar.name}
            />
          ) : (
            <img
              className="sm:w-full md:w-1/3 object-cover"
              src={non}
              alt={newsar.name}
            />
          )}

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
              Lancio {newsar.name}
            </h1>
            <div className="flex">
              <b>Status:</b>&nbsp;
              <p className="">{newsar.status.abbrev}</p>
            </div>
            <div className="flex">
              <b>Descrizione:</b>&nbsp;
              <p className="">{newsar.status.description}</p>
            </div>
            <div className="flex">
              <b>Piattaforma di lancio:</b>&nbsp;
              <p className=""> {newsar.pad.name}</p>
            </div>
            <div className="flex">
              <b>Location:</b>&nbsp;
              <p>{newsar.location.name}</p>
            </div>
          </div>
        </article>
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launch/${pageNumber}`
  );

  const newsar = await res.json();

  // Pass data to the page via props

  return {
    props: {
      newsar,
    },
  };
}
export default SingoloLancio;
