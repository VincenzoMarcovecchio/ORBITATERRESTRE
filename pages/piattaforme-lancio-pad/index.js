import React, { useState } from "react";
import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";
import nontrovata from "../../content/assets/immagine-non-trovata.png";
import { Lanci } from "../../components/common/Lanci";

function Piattaforme({ pad }) {
  
  const [countryCode, setCountry] = useState(null);

  const router = useRouter();

let categories = [];

  for (let i = 0; i < pad.count; i++) {
    categories.push(pad.results[i].location.country_code);
  }

  console.log(categories)

  return (
    <LayoutComponent>
      <SEO title="Piattaforme di lancio" />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Piattaforme di lancio
          </h2>
          <h3 className="text-2xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Ci sono {pad.count} risultati
          </h3>
        
          {pad.results ? (
            pad.results.map((pa) => {
              return (
                <article className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
                  <img src={pa.map_image || nontrovata} alt={pa.name} />
                  <h1 className="text-3xl font-bold text-yellow-600 font-display mb-2 mt-6">
                    {pa.name}
                  </h1>
                  <h2>Totale lanci effetuati:&nbsp;{pa.total_launch_count}</h2>
                  <h2>Latitudine:&nbsp;{pa.latitude}</h2>
                  <h2>Longitudine:&nbsp;{pa.longitude}</h2>
                  <h2 onClick={() => setCountry(pa.location.country_code)}>
                    {pa.location.country_code}
                  </h2>
                  <span
                        onClick={() =>
                          router
                            .push(`/piattaforma-lancio-pad/${pa.id}`)
                            .then(() => window.scrollTo(0, 0))
                        }
                        className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      >
                        Leggi di più
                      </span>
                  
                </article>
              );
            })
          ) : (
            <pre>{pad.detail}</pre>
          )}
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

export const getServerSideProps = async () => {
  const apiResponse = await fetch(`https://ll.thespacedevs.com/2.2.0/pad?limit=10&offset=10`);

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
    },
  };
};

export default Piattaforme;
