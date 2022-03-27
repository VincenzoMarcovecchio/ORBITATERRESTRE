import React from "react";
import { SEO } from "@components/common";
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
    <>
      <SEO
        cano="si"
        slug="how-far-has-elon-musk-tesla-gone"
        imageUrl="how-far-has-elon-musk-tesla-gone.jpg"
        title="Where is Elon Mask Tesla"
        description="Elon Musk's Tesla Roadster is an electric sports car that was used as a dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driving seat. The car and rocket are products of Tesla and SpaceX. This 2008 Model Roadster was previously used by Musk for commuting and is the only consumer car sent into space."
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
              <b>Launched: {unixToLocal(roadster.launch_date_unix)}</b>
            </p>
            <p>
              <b>
                Elon Musk's Tesla Roadster is an electric sports car that
                was used as a dummy payload for the test flight
                Falcon Heavy from February 2018 and is now an artificial satellite
                of the Sun. Starman, a mannequin dressed in a spacesuit,
                occupies the driving seat. The car and the rocket are products of
                Tesla and SpaceX. This 2008 model Roadster was
                previously used by Musk for commuting and is
                the only consumer car sent into space.
              </b>
            </p>
          </div>
          <table class="rounded-t-lg m-5 w-full mx-auto text-gray-100 bg-black">
            <thead>
              <tr className="text-left border-b-2 border-indigo-300">
                <th>Statistics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-indigo-400">
                <td>Speed</td>
                <td>{`${Math.trunc(roadster.speed_kph)} kmph`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Distance from the earth</td>
                <td>{`${Math.trunc(roadster.earth_distance_km)} km`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Distance from the mars</td>
                <td> {`${Math.trunc(roadster.mars_distance_km)} km`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Period</td>
                <td> {`${roadster.period_days.toFixed(4)} days`}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Pulp</td>
                <td> {`${roadster.launch_mass_kg} kg`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Type of orbit</td>
                <td> {roadster.orbit_type} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Longitude</td>
                <td> {roadster.longitude.toFixed(4)} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Support</td>
                <td> {`${roadster.apoapsis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Periasse</td>
                <td> {`${roadster.periapsis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Semi major axis</td>
                <td>{`${roadster.semi_major_axis_au.toFixed(4)} AU`} </td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Eccentricity</td>
                <td>{roadster.eccentricity.toFixed(6)}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Inclination</td>
                <td>{roadster.inclination.toFixed(6)}</td>
              </tr>
              <tr className="border-b border-indigo-400">
                <td>Argument of the periaxis</td>
                <td>{roadster.periapsis_arg.toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Next Launches
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
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
