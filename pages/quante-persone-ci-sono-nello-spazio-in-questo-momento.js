import React from "react";
import { LayoutComponent, SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

function Newsz({ newsdatal }) {
  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug="quante-persone-ci-sono-nello-spazio-in-questo-momento"
        title="Quanti astronauti ci sono nello Spazio in questo momento? "
        imageUrl="quante-persone-ci-sono-nello-spazio-in-questo-momento.jpg"
        description="Aggiornamenti in tempo reale"
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full ">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Quante persone ci sono nello Spazio adesso?
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
            <p>caricamento supersonico in corso...</p>
          )}
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticProps() {
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
