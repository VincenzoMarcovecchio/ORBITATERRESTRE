import React, { useState } from "react";
import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";
import nontrovata from "../content/assets/immagine-non-trovata.png";
import { Lanci } from "../components/common/Lanci";
import { renderSwitch } from "../utils/getFlags";

function Piattaforme({ pad }) {
  const [currentCategory, setCurrentCategory] = useState("America");

  const router = useRouter();

  let categories = [];

  for (let i = 0; i < pad.results.length; i++) {
    categories.push(pad.results[i].location.country_code);
  }

  console.log(categories, pad);

  const uniquecat = [...new Set(categories)];
  return (
    <LayoutComponent>
      <SEO
        title="Piattaforme di lancio"
        slug="piattaforme-lancio-pad"
        description="Lista delle piattaforme di lancio"
        cano="si"
        imageUrl={pad.results[0]?.map_image}
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Piattaforme di lancio
          </h2>
          <h3 className="text-2xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Ci sono {pad.count} risultati
          </h3>
          <div className="display flex-wrap flex mb-8 mt-4 space-x-2 md:space-x-8">
            {uniquecat.map((cate, i) => {
              return (
                <span
                  className="cursor-pointer mb-4 mr-2 px-2  py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  key={i}
                  onClick={() => setCurrentCategory(cate)}
                >
                  {renderSwitch(cate)}
                </span>
              );
            })}
          </div>

          {pad.results
            ? pad.results
                .filter(
                  ({ location: { country_code } }) =>
                    country_code == currentCategory
                )
                .map((pa) => {
                  return (
                    <article className=" max-w-7xl mt-12 mx-auto   display flex flex-col items-start">
                      <img src={pa.map_image || nontrovata} alt={pa.name} />
                      <h1 className="text-3xl font-bold text-yellow-600 font-display mb-2 mt-6">
                        {pa.name}
                      </h1>
                      <p className="mt-2 text-lg mb-3">
                        <b>Totale lanci effetuati:&nbsp;</b>
                        {pa.total_launch_count}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <b>Latitudine:&nbsp;</b>
                        {pa.latitude}
                      </p>
                      <p className="mt-2 text-lg mb-4">
                        <b>Longitudine:&nbsp;</b>
                        {pa.longitude}
                      </p>

                      <span
                        onClick={() =>
                          router
                            .push(`/piattaforma-lancio-pad/${pa.id}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                        className="px-3 cursor-pointer mt-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      >
                        Leggi di più
                      </span>
                    </article>
                  );
                })
            : pad.results.map((pa) => {
                return (
                  <article className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
                    <img src={pa.map_image || nontrovata} alt={pa.name} />
                    <h1 className="text-3xl font-bold text-yellow-600 font-display mb-2 mt-6">
                      {pa.name}
                    </h1>
                    <p className="mt-2 text-lg mb-3">
                      <b>Totale lanci effetuati:&nbsp;</b>
                      {pa.total_launch_count}
                    </p>
                    <p className="mt-2 text-lg mb-3">
                      <b>Latitudine:&nbsp;</b>
                      {pa.latitude}
                    </p>
                    <p className="mt-2 text-lg mb-4">
                      <b>Longitudine:&nbsp;</b>
                      {pa.longitude}
                    </p>

                    <span
                      onClick={() =>
                        router
                          .push(`/piattaforma-lancio-pad/${pa.id}`)
                          .then(() => window.scrollTo(0, 0))
                      }
                      className="px-3 cursor-pointer mt-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    >
                      Leggi di più
                    </span>
                  </article>
                );
              })}
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl md:px-4 font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
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
  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/pad/?limit=20&offset=20`
  );

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
    },
  };
}

export default Piattaforme;
