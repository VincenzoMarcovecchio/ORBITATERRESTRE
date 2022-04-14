import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import { Formik } from "formik";
import Image from 'next/image'

function Paginax() {

  const [defaultResults, setDefaultResults] = useState([]);
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("American");
  const [loading, SetLoading] = useState(true);
 

  useEffect(() => {

    fetch(
      `https://ll.thespacedevs.com/2.1.0/astronaut/?search=${name}&nationality=${nationality}`
    ).then((res) => res.json())
      .then((data) => setDefaultResults(data.results))



  }, [nationality]);

  useEffect(() => {


    fetch(
      `https://ll.thespacedevs.com/2.1.0/astronaut/?search=${name}&nationality=${nationality}`
    )
      .then((res) => res.json())
      .then((data) => setDefaultResults(data.results))



  }, [name]);

  return (
    <>
      <SEO
        cano="si"
        slug="astronauts"
        title="Astronauts"
        description="Meet the incredible people that took part in aspace mission👨‍🚀"
      />
      <div className=" max-w-7xl mx-auto px-4  sm:px-6 display flex flex-col items-start">
        <h1 className="text-4xl text-center font-bold text-yellow-600 font-display mt-8 mx-auto ">
          Astronauts 👨‍🚀
        </h1>
        <h2 className="text-2xl text-center font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
       Meet all the incredible people who took part in a space mission
        </h2>

        <div className=" flex-wrap max-w-7xl mx-auto px-4 sm:px-6 display flex items-start">
          <span
            className={`${String(nationality.toLowerCase()) === String("all")
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setNationality("All")}
          >
            All
          </span>
          <span
            className={`${String(nationality.toLowerCase()) === String("american")
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setNationality("American")}
          >
            Americans
          </span>
          <span
            className={`${String(nationality.toLowerCase()) === String("russian")
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setNationality("Russian")}
          >
            Russians
          </span>
          <span
            className={`${String(nationality.toLowerCase()) === String("european")
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setNationality("European")}
          >
            Europeans
          </span>
          <span
            className={`${String(nationality.toLowerCase()) === String("others")
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setNationality("Others")}
          >
            Others
          </span>
        </div>

        <form
          className="form flex flex-col max-w-md mx-auto mt-12 mb-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="name">Search the dataset</label>
          <input
            className="input mt-2 p-2 text-black text-lg mb-3"
            type="text"
            name="name"
            placeholder="es John"
            onChange={(e) => setName(e.target.value)}

            value={name}
          />

          <button
            type="submit"
            className="px-3 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded"

          >
            Search
          </button>
        </form>


        <ul className="w-full">
    
          {defaultResults ? (
            defaultResults.map((result) => {
              const { name, id, profile_image, nationality, bio } = result;

              return (
                <li key={id}>
                  <figure className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden key={name}">
                    {profile_image && (
                      <Image
                        className="w-full md:w-1/3 object-cover flex emma"
                        src={profile_image}
                        alt={`${name}-thumb`}
                        width="350"
                        height="350"
                   
                      />

                    )}
                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h3 className="text-3xl font-bold text-yellow-600 mb-4 font-display">
                        {name}
                      </h3>
                      <p className="">
                        <b className="font-extrabold">Nationality </b>
                        :&nbsp;{nationality}
                      </p>
                      <p className="">
                        <b className="font-extrabold">Born</b>
                        :&nbsp;{result.date_of_birth}
                      </p>
                      <p className="">
                        <b className="font-extrabold">Desription:</b>
                        &nbsp;{bio}
                      </p>
                      <p className="">
                        <b className="font-extrabold">First flight:&nbsp;</b>
                        {result.first_flight}
                      </p>
                      <p className="">
                        <b className="font-extrabold">Instagram:&nbsp;</b>
                        {result.instagram}
                      </p>
                      <p className="">
                        <b className="font-extrabold">Twitter:&nbsp;</b>
                        {result.twitter}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              );
            })
          ) : (
            <pre>{defaultResults && defaultResults.detail}</pre>
          )}
        </ul>
      </div>
    </>
  );
}

export default Paginax;
