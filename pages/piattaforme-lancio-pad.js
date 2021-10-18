import  { useState } from "react";
import { SEO } from "@components/common";
import { useRouter } from "next/router";
import { Lanci } from "../components/common/Lanci";
import { renderSwitch } from "../utils/getFlags";
import { piatta } from "../data/piatte";

export async function getServerSideProps () {
  return {
    props: {
      pad: piatta,
    },
  };
}
function Piattaforme({ pad }) {
  const [currentCategory, setCurrentCategory] = useState("ITA");

  const router = useRouter();

  let categories = [];

  for (let i = 0; i < 193; i++) {
    categories.push(pad.results[i].location.country_code);
  }

  console.log(categories,currentCategory, pad);

  const uniquecat = [...new Set(categories)];
  return (
    <>
      <SEO
        title="Piattaforme di lancio"
        slug="piattaforme-lancio-pad"
        description="Lista delle piattaforme di lancio"
        cano="si"
        imageUrl={"piattaforme-lancio-pad.jpg"}
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Piattaforme di lancio
          </h2>
          <h3 className="text-2xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Ci sono 193 risultati
          </h3>
          <div className="display justify-start main-content w-full flex-wrap flex mb-8 mt-4 ">
            {uniquecat.map((cate, i) => {
              return (
                <span
                  className="cursor-pointer  mr-2 mb-2 px-2  py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  key={i}
                  onClick={() => setCurrentCategory(cate)}
                >
                  {renderSwitch(cate)}
                </span>
              );
            })}
          </div>

          {pad.results &&
            pad.results
              .filter(
                ({ location: { country_code } }) =>
                  currentCategory == country_code
              )
              .map((pa) => {
                return (
                  <article className=" max-w-7xl mt-12 mx-auto   display flex flex-col items-start">
                    <img  src={`/immagine-non-trovata.png`} />
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
   </>
  );
}

export default Piattaforme;
