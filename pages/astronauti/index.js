import { React, useState, useEffect } from "react";
import { LayoutComponent, SEO } from "@components/common";

function Pagina() {
  const defaultEndpoint =
    "https://ll.thespacedevs.com/2.1.0/astronaut/?limit=10&offset=10";

  const [defaultResults, setDefaultResults] = useState([]);
  const astronauti = ["All", "American", "Russian", "European", "Others"];
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("All");

  useEffect(() => {
    fetch(
      `https://ll.thespacedevs.com/2.1.0/astronaut/?search=${name}&limit=50&offset=50`
    )
      .then((res) => res.json())
      .then((data) => setDefaultResults(data.results));
  }, [name]);

  useEffect(() => {
    fetch(
      `https://ll.thespacedevs.com/2.1.0/astronaut/?nationality=${nationality}&limit=50&offset=50)`
    )
      .then((res) => res.json())
      .then((data) => setDefaultResults(data.results));
  }, [nationality]);

  return (
    <LayoutComponent>
      <SEO
        title="Anagrafe Astronauti"
        description="Incontra le persone eccezionali che si sono avventurate nello spazio 👨‍🚀"
      />
      <div className=" max-w-7xl mx-auto px-4  sm:px-6 display flex flex-col items-start">
        <h1 className="text-4xl  font-bold text-yellow-600 font-display mt-8 mx-auto ">
          Astronauti ‎‍🚀
        </h1>
        <h2 className="text-2xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
          👨‍🚀 Incontra le persone eccezionali che si sono avventurate nello
          spazio.👨‍🚀{" "}
        </h2>

        <div className=" flex-wrap max-w-7xl mx-auto px-4 sm:px-6 display flex items-start">
          {astronauti.map((li) => {
            return (
              <span
                className={`${
                  String(nationality.toLowerCase()) === String(li.toLowerCase())
                    ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
                    : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
                }`}
                onClick={() => setNationality(li)}
              >
                {li}
              </span>
            );
          })}
        </div>

        <form className="form flex flex-col max-w-md mx-auto mt-12 mb-12">
          <label htmlFor="nationality">Cerca per nome</label>
          <input
            className="input mt-2 p-2 text-black text-lg mb-3"
            type="text"
            name="nationality"
            placeholder="es Armstrong"
            onChange={(e) => setName(e.target.value)}
            alue={name}
          />
        </form>
        <ul>
          {defaultResults
            ? defaultResults.map((result) => {
                const { name, profile_image, nationality, bio } = result;

                return (
                  <li key={name}>
                    <figure className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden key={name}">
                      {profile_image && (
                        <img
                          className="sm:w-full md:w-1/3 object-cover"
                          src={profile_image}
                          alt={`${name}-thumb`}
                        />
                      )}
                      <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                        <h3 className="text-3xl font-bold text-yellow-600 font-display">
                          {name}
                        </h3>
                        <p className="mt-2 text-lg mb-3">
                          <strong>Nazionalita'</strong>
                          :&nbsp;{nationality}
                        </p>
                        <p className="mt-2 text-lg mb-3">
                          <u>Nato il</u>:&nbsp;{result.date_of_birth}
                        </p>
                        <p className="mt-2 text-lg mb-3">
                          <u>Descrizione:</u>&nbsp;{bio}
                        </p>
                        <p className="mt-2 text-lg mb-3">
                          <u>Primo Volo:&nbsp;</u>
                          {result.first_flight}
                        </p>
                        <p className="mt-2 text-lg mb-3">
                          <u>Instagram:&nbsp;</u>
                          {result.instagram}
                        </p>
                        <p className="mt-2 text-lg mb-3">
                          <u>Twitter:&nbsp;</u>
                          {result.twitter}
                        </p>
                      </figcaption>
                    </figure>
                  </li>
                );
              })
            : "ci sono stati dei problemi..."}
        </ul>
      </div>
    </LayoutComponent>
  );
}

export default Pagina;
