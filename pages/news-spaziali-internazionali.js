import { React, useState, useEffect } from "react";
import Link from "next/link";
import { LayoutComponent, Bio, SEO } from "@components/common";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import non from "../content/assets/immagine-non-trovata.png";

function News({ newsdata }) {
  const url =
    "http://mimmofranco.herokuapp.com/https://ll.thespacedevs.com/2.1.0/event/upcoming";

  const { data, error } = useSWR(url, fetcher);

  console.log(data);

  return (
    <LayoutComponent>
      <SEO title="News Astronautiche Internazionali " />
      <div className=" max-w-screen-2xl md:flex ">
        <div className=" max-w-7xl mx-auto  px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
          {newsdata.map((lol) => {
            return (
              <article
                className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                key={lol.id}
              >
                <img
                  className="sm:w-full md:w-1/3 object-cover"
                  src={lol.imageUrl}
                  alt={lol.titile}
                />

                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h1 className="text-3xl font-bold text-yellow-600 font-display">
                    {lol.title}
                  </h1>
                  <p className="mt-2 text-lg mb-3">{lol.summary}</p>

                  <a
                    className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    href={lol.url}
                    target="_blank"
                    rel="noopener noreferrer canonical"
                  >
                    Vai al sito
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <section className="flex min-w-full w-24 ">
          <aside>
            <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Eventi Prossimi
            </h3>
            <div className="px-4 flex flex-col">
              {data != undefined ? (
                data.results.map((la) => {
                  return (
                    <figure
                      key={la.date}
                      className=" relative w-full shadow-lg  mb-8 md:max-w-md"
                    >
                      {la.featured_image ? (
                        <img
                          loading="lazy"
                          className=" max-h-35 w-full"
                          src={featured_image}
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
                        <div className="flex flex-col">
                          <b>Nome:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.name}
                          </Link>
                        </div>
                        <div className="flex flex-col">
                          <b>Descrizione:&nbsp;</b>

                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.description}
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  );
                })
              ) : (
                <b>{"errore nel caricamento"}</b>
              )}
            </div>
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://spaceflightnewsapi.net/api/v2/articles");

  const news = await res.json();

  const newsdata = news;

  // Pass data to the page via props

  return {
    props: {
      newsdata,
    },
  };
}
export default News;
