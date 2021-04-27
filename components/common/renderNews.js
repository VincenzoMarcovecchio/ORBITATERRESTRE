import React, { useState, useEffect } from "react";
import loader from "../../content/assets/little-loader.gif";
import useSWR from "swr"; //maybe??
import Image from "next/image";

export function RenderNews({ ids }) {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    const fetchData = () => {
      ids &&
        Promise.all(
          ids.map((url) =>
            fetch(
              `https://api.nasa.gov/techport/api/projects/${url.projectId}?api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
            )
          )
        )
          .then((resp) => Promise.all(resp.map((r) => r.json())))
          .then((result) => {
            setArticles(result);
          });
    };

    fetchData();
  }, [ids]);

  return (
    <React.Fragment>
      <div className="w-full dark:bg-gray-700 antialiased dark:text-white flex flex-wrap font-body">
        {articles.length > 2 ? (
          articles.map((ar) => {
            return (
              <article
                className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                key={ar.project?.id}
              >
                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h1 className="text-3xl font-bold text-yellow-600 font-display">
                    {ar.project?.title}
                  </h1>
                  <b>Anno di inizio:</b>
                  <p>{ar.project?.startYear}</p>
                  <b>Fine:</b>
                  <p>{ar.project?.endDateString}</p>
                  <div
                    className="mt-2 text-lg mb-3"
                    dangerouslySetInnerHTML={{
                      __html: ar.project?.description,
                    }}
                  ></div>
                  <a
                    href="https://etd.gsfc.nasa.gov/"
                    className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    target="_blank"
                    rel="noopener noreferrer canonical"
                  >
                    Leggi di piu
                  </a>
                </div>
              </article>
            );
          })
        ) : (
          <img
            className="w-full min-h-screen object-cover"
            src={loader}
            alt="loader"
          />
        )}
      </div>
    </React.Fragment>
  );
}
