import {  useState, useEffect } from "react";
import Link from "next/link";
import {  SEO } from "@components/common";
import { Formik } from "formik";

const LanciIndex = () => {
  
  const [name, setName] = useState("");
  const [lancid, setLancid] = useState([]);
  const [crewed, setCrewed] = useState(false);

  useEffect(() => {
    fetch(
      `https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=${name}&is_crewed=${crewed}&limit=50&offset=50&include_suborbital=true&related=false`
    )
      .then((data) => data.json())
      .then((res) => setLancid(res));
  }, [crewed, name]);

  return (
    <>
      <SEO title="Lanci di missioni Spaziali" />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Lanci Di Missioni Spaziali
        </h1>
        <span
          className={`${
            crewed
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
          }`}
          onClick={() => setCrewed(true)}
        >
          Con equipaggio
        </span>
        <span
          className={`${
            !crewed
              ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
          }`}
          onClick={() => setCrewed(false)}
        >
          Senza equipaggio
        </span>
        <div className=" y flex flex-col items-start">
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
                  placeholder="es SpaceX"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nationality}
                />
                {errors.nationality &&
                  touched.nationality &&
                  errors.nationality}
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
        </div>
        {lancid.results ? (
          lancid?.results.map((lol) => {
            return (
              <article
                className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                key={lol.id}
              >
                {lol.image ? (
                  <img
                    className="sm:w-full md:w-1/3 object-cover"
                    src={lol.image}
                    alt={lol.name}
                  />
                ) : (
                  <img
                    className="sm:w-full md:w-1/3 object-cover"
                    src={`/immagine-non-trovata.png`}
                    alt={lol.name}
                  />
                )}

                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h1 className="text-3xl mb-8 font-bold text-yellow-600 font-display">
                    {lol.name}
                  </h1>
                  <p className="flex">
                    <b>Status:</b>&nbsp;
                    <p className="">{lol.status.abbrev}</p>
                  </p>
                  <p className="flex">
                    <b>Descrizione:</b>&nbsp;
                    <p className="">{lol.status.description}</p>
                  </p>
                  <p className="flex">
                    <b>Piattaforma di lancio:</b>&nbsp;
                    <p className=""> {lol.pad}</p>
                  </p>
                  <p className="flex">
                    <b>Location:</b>&nbsp;
                    <p>{lol.location}</p>
                  </p>
                  <Link href={`/lancio-missione-spaziale/${lol.id}/`}>
                    Scopri di piu
                  </Link>
                </div>
              </article>
            );
          })
        ) : (
          <p>{lancid.detail || "caricamento supersonico in corso..."}</p>
        )}
      </div>
    </>
  );
};

export default LanciIndex;
