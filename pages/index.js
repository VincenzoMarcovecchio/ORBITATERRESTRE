import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { setCORS } from "google-translate-api-browser";
import { Countdown } from "../utils/countdown";
import non from "../content/assets/immagine-non-trovata.png";
import { QuickLinks } from "../components/common/quickLinks";

function Home({ datas, lanci }) {
  console.log(lanci);

  const translateto = JSON.stringify(datas.explanation);
  const translatetwo = JSON.stringify(datas.title);
  const translate = setCORS("http://mimmofranco.herokuapp.com/");
  const [translated, setTranslated] = useState(null);
  const [titlet, setTitlet] = useState(null);

  useEffect(() => {
    translate(translateto, { to: "it" })
      .then((res) => {
        setTranslated(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    translate(translatetwo, { to: "it" })
      .then((res) => {
        setTitlet(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <LayoutComponent>
      <SEO title="Home" />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Immagine astronomica del giorno
          </h2>
          <figure className="sm:pr-0  ">
            {datas.media_type === "video" && (
              <iframe
                className="w-full flex mb-4"
                width="420"
                height="515"
                src={datas.url}
              ></iframe>
            )}
            {datas.media_type !== "video" && (
              <img className="mb-4 flex " src={datas.url} alt={datas.title} />
            )}
            <figcaption>
              <p className="mb-2">
                <b>Titolo:&nbsp;</b>
                {titlet || datas.title}
              </p>
              <p className="mb-2 pr-4">
                <b>Descrizione:&nbsp;</b>
                {translated || datas.explanation}
              </p>
              <p className="mb-2">
                <b>©&nbsp;</b>
                {datas.copyright}
              </p>
            </figcaption>
          </figure>
          <QuickLinks />
        </section>

        <hr />
        <section className="flex">
          <aside>
            <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h3>
            <div className="px-4 flex flex-col">
              {lanci ? (
                lanci?.results?.map((la) => {
                  return (
                    <figure
                      key={la.launch_service_provider.name}
                      className=" relative w-full shadow-lg  mb-8 md:max-w-md"
                    >
                      <Countdown
                        timeTillDate={la.window_end}
                        timeFormat={"YYYY MM DD, h:mm a"}
                      />
                      {la.image ? (
                        <img
                          className=" max-h-35 w-full"
                          src={la.image}
                          alt={la.name}
                        />
                      ) : (
                        <img
                          className=" max-h-35 w-full"
                          src={non}
                          alt={la.name}
                        />
                      )}

                      <figcaption className="z-20 p-2">
                        <div className="flex">
                          <b>Agenzia Spaziale:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/agenzie-spaziali/singola/${la.launch_service_provider.id}`}
                          >
                            {la.launch_service_provider.name}
                          </Link>
                        </div>
                        <div className="flex">
                          <b>Dove:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/piattaforme-lancio-pad/${la.pad.id}`}
                          >
                            {la.pad.name}
                          </Link>
                        </div>
                        <div className="flex">
                          <b>Nome Missione:&nbsp;</b>
                          <Link className="z-20" href={`/#`}>
                            {la.mission?.name}
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  );
                })
              ) : (
                <b>{lanci.detail || "errore nel caricamento"}</b>
              )}
              <div>
                <Link href={`/lanci-di-missioni-spaziali`}>
                  Scopri di piu` sui lanci
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const resat = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );
  const datas = await resat.json();

  const lanciIndex = await fetch(
    "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  const lanci = await lanciIndex.json();

  return {
    props: {
      datas,
      lanci,
    },
  };
}

export default Home;
