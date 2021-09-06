import React from "react";
import { LayoutComponent, SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

const unixToLocal = (target, dateString, dateOnly = 0) => {
  let dateObject;
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (dateString) {
    dateObject = new Date(target);
  } else {
    dateObject = new Date(target * 1000);
  }

  const date = dateObject.getDate();
  const month = monthArray[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours() % 12 || 12;
  const ampm = dateObject.getHours() >= 12 ? "pm" : "am";
  const minutes = Math.floor(dateObject.getMinutes() / 10)
    ? dateObject.getMinutes()
    : "0" + dateObject.getMinutes();

  if (dateOnly) {
    return `${month} ${date}, ${year}`;
  }

  return `${month} ${date}, ${year} ${hour}:${minutes} ${ampm}`;
};

const Roadster = ({ roadster }) => {
  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug="quanto-lontana-e-arrivata-la-macchina-di-elon-musk"
        imageUrl="quanto-lontana-e-arrivata-la-macchina-di-elon-musk.jpg"
        title="Dove è arrivata la Tesla di Elon Musk "
        description="La Tesla Roadster di Elon Musk è un'auto sportiva elettrica che è stata usata come carico utile fittizio per il volo di prova Falcon Heavy del febbraio 2018 ed è ora un satellite artificiale del Sole. Starman, un manichino vestito con una tuta spaziale, occupa il posto di guida. L'auto e il razzo sono prodotti di Tesla e SpaceX. Questa Roadster modello 2008 è stata precedentemente utilizzata da Musk per il pendolarismo ed è l'unica auto di consumo inviata nello spazio."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full ">
          <div className={"flex flex-col "}>
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              {roadster.name}
            </h2>
            <img
              src="/quanto-lontana-e-arrivata-la-macchina-di-elon-musk.jpg"
              alt="elon musk roadster"
              className="mb-6"
            />
           
            <p>
              <b>Lanciata: {unixToLocal(roadster.launch_date_unix)}</b>
            </p>
            <p>
              <b>
                La Tesla Roadster di Elon Musk è un'auto sportiva elettrica che
                è stata usata come carico utile fittizio per il volo di prova
                Falcon Heavy del febbraio 2018 ed è ora un satellite artificiale
                del Sole. Starman, un manichino vestito con una tuta spaziale,
                occupa il posto di guida. L'auto e il razzo sono prodotti di
                Tesla e SpaceX. Questa Roadster modello 2008 è stata
                precedentemente utilizzata da Musk per il pendolarismo ed è
                l'unica auto di consumo inviata nello spazio.
              </b>
            </p>
          </div>
          <table class="rounded-t-lg m-5 w-full mx-auto text-gray-100 bg-black">
            <thead>
              <tr className="text-left border-b-2 border-indigo-300">
                <th>Statistiche</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-indigo-400">
                <td>Velocità</td>
                <td>{`${Math.trunc(roadster.speed_kph)} kmph`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Distanza dalla terra</td>
                <td>{`${Math.trunc(roadster.earth_distance_km)} km`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Distanza da Marte</td>
                <td> {`${Math.trunc(roadster.mars_distance_km)} km`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Periodo</td>
                <td> {`${roadster.period_days.toFixed(4)} days`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Massa</td>
                <td> {`${roadster.launch_mass_kg} kg`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Tipo di orbita</td>
                <td> {roadster.orbit_type} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Longitudine</td>
                <td> {roadster.longitude.toFixed(4)} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Apoasse</td>
                <td> {`${roadster.apoapsis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Periasse</td>
                <td> {`${roadster.periapsis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Asse semi maggiore</td>
                <td>{`${roadster.semi_major_axis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Eccentricità</td>
                <td>{roadster.eccentricity.toFixed(6)}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Inclinazione</td>
                <td>{roadster.inclination.toFixed(6)}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Argomento del periasse</td>
                <td>{roadster.periapsis_arg.toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
};

export default Roadster;

export async function getServerSideProps() {
  const apiRoadster = await fetch("https://api.spacexdata.com/v4/roadster");

  const cico = await apiRoadster.json();

  return {
    props: {
      roadster: cico,
    },
  };
}
