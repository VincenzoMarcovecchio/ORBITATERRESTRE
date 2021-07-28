import { React, useState, useEffect } from "react";
import { LayoutComponent, SEO } from "@components/common";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Pagina() {
  const defaultEndpoint =
    "https://ll.thespacedevs.com/2.1.0/astronaut/?limit=10&offset=10";

  const [defaultResults, setDefaultResults] = useState([]);
  const astronauti = ["All", "American", "Russian", "European", "Others"];
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("All");

  console.log(defaultResults);

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
        <h1 className="text-4xl text-center font-bold text-yellow-600 font-display mt-8 mx-auto ">
          Astronauti ‎‍🚀
        </h1>
        <h2 className="text-2xl text-center font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
          👨‍🚀 Incontra le persone eccezionali che si sono avventurate nello
          spazio.👨‍🚀
        </h2>

        <div className=" flex-wrap max-w-7xl mx-auto px-4 sm:px-6 display flex items-start">
          {astronauti.map((li) => {
            return (
              <span
                key={li}
                className={`${String(nationality.toLowerCase()) === String(li.toLowerCase())
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
        <Formik
          enableReinitialize
          initialValues={{ nationality: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.nationality) {
              errors.name = "Oops ??";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(true);
              setName(values.nationality);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              className="form flex flex-col max-w-md mx-auto mt-12 mb-12"
              onSubmit={handleSubmit}
            >
              <label htmlFor="nationality">Cerca nel dataset</label>
              <input
                className="input mt-2 p-2 text-black text-lg mb-3"
                type="text"
                name="nationality"
                placeholder="es John"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationality}
              />
              {errors.nationality && touched.nationality && errors.nationality}
              <button
                type="submit"
                className="px-3 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                disabled={isSubmitting}
              >
                Cerca
              </button>
            </form>
          )}
        </Formik>

        <ul className="w-full">
          {defaultResults ? (
            defaultResults.map((result) => {
              const { name, id, profile_image, nationality, bio } = result;

              return (
                <li key={id}>
                  <figure className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden key={name}">
                    {profile_image && (
                      <img
                        className="w-full md:w-1/3 object-cover"
                        src={profile_image}
                        alt={`${name}-thumb`}
                      />
                    )}
                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h3 className="text-3xl font-bold text-yellow-600 font-display">
                        {name}
                      </h3>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold">Nazionalità </strong>
                        :&nbsp;{nationality}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold" >Nato il</strong>:&nbsp;{result.date_of_birth}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold" >Descrizione:</strong>&nbsp;{bio}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold" >Primo Volo:&nbsp;</strong>
                        {result.first_flight}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold" >   Instagram:&nbsp;</strong>
                        {result.instagram}
                      </p>
                      <p className="mt-2 text-lg mb-3">
                        <strong className="font-extrabold"  >   Twitter:&nbsp;</strong>
                        {result.twitter}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              );
            })
          ) : (
            <li>ci sono stati dei problemi...</li>
          )}
        </ul>
      </div>
    </LayoutComponent>
  );
}

export default Pagina;
