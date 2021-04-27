import { React } from "react";

import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";

function StazioneSpaziale({ sta }) {
  console.log(sta);
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO
        description="Lista completa delle stazioni spaziali attive e non "
        title="tazioni spaziali"
      />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
          Stazioni Spaziali
        </h1>
        {sta.results ? (
          sta.results.map((lol) => {
            return (
              <article
                className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                key={lol.id}
              >
                <img
                  className="sm:w-full md:w-1/3 object-cover"
                  src={lol.image_url}
                  alt={lol.name}
                />

                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h1 className="text-3xl font-bold text-yellow-600 font-display">
                    {lol.name}
                  </h1>
                  <b>Orbita:</b>
                  <p>{lol.orbit}</p>
                  <b>Tipo:</b>
                  <p>{lol.type.name}</p>
                  <b>Descrizione:</b>
                  <p>{lol.description}</p>

                  <span
                    onClick={() =>
                      router
                        .push(`/stazione-spaziale/${lol.id}`)
                        .then(() => window.scrollTo(0, 0))
                    }
                    className="px-3 mt-4 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
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
}

export async function getServerSideProps() {
  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.0.0/spacestation/?format=json&name=&orbit=&ordering=id&owners__abbrev=&owners__name=&status=&type=`
  );

  const data = await apiResponse.json();

  return {
    props: {
      sta: data,
    },
  };
}
export default StazioneSpaziale;
