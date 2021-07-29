import React, { useState, useEffect } from "react";

export function RenderNews({ ids }) {
  const [articles, setArticles] = useState([]);

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
                key={ar.project?.projectId}
              >
                <div className=" px-4  py-6 ">
                  <h1 className="text-3xl mb-4 font-bold text-yellow-600 font-display">
                    {ar.project?.title}
                  </h1>
                  <div className="flex">
                    <b>Anno di inizio:&nbsp;</b>
                    <p>{ar.project?.startYear}</p>
                  </div>
                  <div className="flex">
                    <b>Fine:&nbsp;</b>
                    <p>{ar.project?.endDateString}</p>
                  </div>
                  <div
                    className="mt-2 text-lg mb-3"
                    dangerouslySetInnerHTML={{
                      __html: ar.project?.description,
                    }}
                  ></div>
                  <a
                    href={ar.project?.website}
                    className="px-3 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    target="_blank"
                    rel="noopener noreferrer canonical"
                  >
                    {ar.project?.website
                      ? " Leggi di piu"
                      : "nessun sito trovato"}
                  </a>
                </div>
              </article>
            );
          })
        ) : (
       <p>Caricamento supersonico in corso...</p>
        )}
      </div>
    </React.Fragment>
  );
}
