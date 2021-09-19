import  {  useEffect } from "react";
import {  SEO } from "@components/common";
import { useRouter } from "next/router";

function Asteroidi({ near }) {

  var newObject;

  useEffect(() => {
    newObject = Object.keys(near.near_earth_objects).map(function (key) {
      return near.near_earth_objects[key];
    });
  }, []);

  return (
    <>
      <SEO title="Asteroidi in rotta di collisione" />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Asteroidi in rotta di collisione con il pianeta terra:{" "}
          {near.element_count}
        </h1>
        <div className="w-full text-center">
          <b>A partire dal giorno</b>: <p>2021-01-01</p>
          <b>Fino al giorno</b>: <p>2021-01-08</p>
        </div>

        {newObject.map((element) => {
          return element.map((sol) => {
            return (
              <div
                key={sol.name}
                className=" border-solid border-4 border-light-blue-500 p-4 shadow-lg rounded-lg overflow-hidden  flex flex-col mb-8"
              >
                <strong>Nome: </strong>
                <span>{sol.name}</span>
                <strong>Magnitudine assoluta: </strong>
                <span>{sol.absolute_magnitude_h}</span>
                <strong>Giorno dell'approcio piu vicino: </strong>
                <span>
                  {sol.close_approach_data[0]?.close_approach_date_full}
                </span>
                <span>
                  Velocita` relativa:{" "}
                  {
                    sol.close_approach_data[0]?.relative_velocity
                      .kilometers_per_hour
                  }{" "}
                  Km/h
                </span>
                <span>
                  E` potenzialmente pericoloso:{" "}
                  {sol.is_potentially_hazardous_asteroid === true
                    ? "vero"
                    : "falso"}
                </span>
              </div>
            );
          });
        })}
      </div>
    </>
  );
}

// This gets called on every request nooo
export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-01-01&end_date=2021-01-08&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`
  );

  const news = await res.json();

  const near = news;

  // Pass data to the page via props

  return {
    props: {
      near,
    },
    revalidate: 4000,
  };
};

export default Asteroidi;
