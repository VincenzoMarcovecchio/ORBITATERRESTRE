import { React, useState } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { useRouter } from "next/router";

//da modifare
const Lanci = ({ lancid }) => {
  const router = useRouter();
  console.log(lancid);

  return (
    <LayoutComponent>
      <SEO title="Lanci di missioni Spaziali" />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Lanci
        </h1>
        {lancid.results ? (
          lancid.results.map((lol) => {
            return (
              <article
                className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                key={lol.id}
              >
                <img
                  className="sm:w-full md:w-1/3 object-cover"
                  src={lol.image}
                  alt={lol.name}
                />

                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h1 className="text-3xl font-bold text-yellow-600 font-display">
                    {lol.name}
                  </h1>
                  <b>Location:</b>
                  <Link to={`piattaforme-lancio-pad/${lol.pad.location.id}`}>
                    {lol.pad.location.name}
                  </Link>
                  <b>Parte del programma:</b>
                  <Link to={`programma/${lol.program.id}`}>
                    {lol.program.name}
                  </Link>

                  <p className="mt-2 text-lg mb-3">{lol.description}</p>

                  <span
                    onClick={() =>
                      router
                        .push(`/lanci-di-missioni-spaziali/${lol.slug}`)
                        .then(() => window.scrollTo(0, 0))
                    }
                    className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    target="_blank"
                    rel="noopener noreferrer canonical"
                  >
                    Leggi di piu
                  </span>
                </div>
              </article>
            );
          })
        ) : (
          <p>caricamento supersonico in corso...</p>
        )}
      </div>
    </LayoutComponent>
  );
};

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;

  const res = await fetch(
    `https://ll.thespacedevs.com/2.0.0/launch/?limit=30&offset=30&ordering=name`
  );

  const newsq = await res.json();

  const lancid = newsq;

  // Pass data to the page via props

  return {
    props: {
      lanci,
    },
  };
}
export default Lanci;
