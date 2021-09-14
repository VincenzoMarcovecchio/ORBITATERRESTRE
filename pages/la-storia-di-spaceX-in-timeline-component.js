import { React, useState, useEffect } from "react";
import { LayoutComponent, SEO } from "@components/common";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { setCORS } from "google-translate-api-browser";
import moment from "moment";

function SpaceXTimeline() {
  const url = "https://api.spacexdata.com/v4/history";
  const { data, error } = useSWR(url, fetcher);
  const translate = setCORS("https://mimmofranco.herokuapp.com/");
  const [translated, setTranslated] = useState([]);
  const [toBeTranslated, setToBeTranslated] = useState([]);
  const translateplease = JSON.stringify(toBeTranslated);

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.spacexdata.com/v4/history`)
        .then((res) => res.json())
        .then((results) => {
          setToBeTranslated(
            results.map((item) => {
              return [item.title, item.details, item.links.article];
            })
          );
        })
        .catch((e) => e);
    };
    getData();
  }, []);

  useEffect(() => {
    translate(translateplease, { to: "it" })
      .then((res) => {
        setTranslated(JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  let vaimo = translated.length > 1 && translated.substring(1);

  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug="la-storia-di-spaceX-in-timeline-component"
        title="La storia di SpaceX in un timeline "
        description="Vi siete mai chiesti come l'agenzia spaziale spaceX..."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full">
          <div className="container bg-gray-200 mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-5 md:p-10 h-full">
              <div className="border-2-2 md:left-2/4 absolute border-opacity-20 border-gray-700 h-full border"></div>
              {data ? (
                data.map((res, index) => {
                  return (
                    <div
                      key={res.title}
                      className={`mb-8 flex justify-between ${
                        index % 2 == 0 && "md:flex-row-reverse md:left-timeline"
                      }items-center w-full md:right-timeline`}
                    >
                      <div className="md:order-1 md:w-5/12"></div>
                      <div className="p-4 ml-2 md:p-0  flex items-center justify-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="flex items-center justify-center md:m-0 md:mx-auto font-semibold text-lg text-white">
                          {index}
                        </h1>
                      </div>
                      <div
                        className={`order-1 ${
                          index % 2 == 0 ? "bg-red-400" : "bg-gray-400"
                        }  rounded-lg shadow-xl md:w-5/12 px-6 py-4`}
                      >
                        <h3
                          className={`mb-3 font-bold ${
                            index % 2 == 0 ? "text-white" : "text-gray-800"
                          }  text-xl`}
                        >
                          {res.title}
                        </h3>
                        <time datetime={res.event_date_utc}>
                          {moment(res.event_date_utc).format("YYYY-MM-DD")}
                        </time>

                        <p className="text-sm mt-4 font-medium mb-4 leading-snug tracking-wide text-white text-opacity-100">
                          {res.details}
                        </p>

                        <a
                          href={res.links.article}
                          target="_blank"
                          rel="canonical noopener noreferrer"
                          className="text-sm rounded-full py-1 px-2  mt-8 bg-gray-50 leading-snug tracking-wide font-white leading-none font-display  text-sm color-white"
                        >
                          Scopri di più
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>caricamento supersonico in corso...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </LayoutComponent>
  );
}

export default SpaceXTimeline;
