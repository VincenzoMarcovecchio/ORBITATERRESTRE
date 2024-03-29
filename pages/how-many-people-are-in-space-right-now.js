import React from "react";
import {  SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

function Newsz({ newsdatal }) {
  return (
    <>
      <SEO
        cano="si"
        slug="how-many-people-are-in-space-right-now"
        title="How many people are in space right now? "
        imageUrl="how-many-people-are-in-space-right-now.jpg"
        description="Live updates"
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full ">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            How many people are in space right now?
          </h2>
          <center>
            <h2 className="text-4xl mb-6 mt-4 font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              👉&nbsp;{newsdatal && newsdatal.number}&nbsp;👈
            </h2>
          </center>
          {newsdatal ? (
            newsdatal.people.map((lol) => {
              return (
                <article
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                  key={lol.id}
                >
                  <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                    <h1 className="text-3xl font-bold text-yellow-600 font-display">
                      {lol.name}
                    </h1>
                    <p className="mt-2 text-lg mb-3">{lol.craft}</p>
                  </div>
                </article>
              );
            })
          ) : (
            <p>supersonic loading...</p>
          )}
          <p>
            Further information:{" "}
            <a
              href="http://open-notify.org/Open-Notify-API/People-In-Space/"
              rel="canonical noopener noreferrer"
              target="_blank"
            >
              http://open-notify.org/Open-Notify-API/People-In-Space/
            </a>
          </p>
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
             Next Launches
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
  </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://api.open-notify.org/astros.json");

  const news = await res.json();

  const newsdatal = news;

  // Pass data to the page via props

  return {
    props: {
      newsdatal,
    },
  };
}

export default Newsz;
