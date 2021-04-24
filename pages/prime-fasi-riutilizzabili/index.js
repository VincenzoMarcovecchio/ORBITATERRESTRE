import { React, useState, useEffect } from "react";
import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
function StazioneSpaziale() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch(`https://ll.thespacedevs.com/2.2.0/launcher/?search=${search}`)
      .then((res) => res.json())
      .then((dat) => setData(dat))
      .catch((err) => console.log(err));
  }, [search]);

  console.log(search);
  return (
    <LayoutComponent>
      <SEO
        description="Monitoriamo le prime fasi del razzo quando un veicolo di lancio può essere utilizzato più di una volta come i core Falcon 9 utilizzati da SpaceX"
        title="Lanciatori e prime fasi riutilizzabili"
      />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
          Lanciatori e prime fasi riutilizzabili
        </h1>
        <h3 className="text-2xl mb-6">Ci sono {data.count} risultati</h3>

        <Formik
          enableReinitialize
          initialValues={{ search: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.search) {
              errors.name = "Oops ??";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSearch(values.search);
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
              <label htmlFor="nationality">Cerca per nome</label>
              <input
                className="input mt-2 p-2 text-black text-lg mb-3"
                type="text"
                name="search"
                placeholder="es Falcon"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
              />

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

        {data.results?.map((lol) => {
          return (
            <article
              className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
              key={lol.id}
            >
              <img
                className="sm:w-full md:w-1/3 object-cover"
                src={lol.image_url}
                alt={lol.name}
              />

              <div className="sm:w-full md:w-2/3 px-4  py-6">
                <h1 className="text-3xl font-bold text-yellow-600 font-display">
                  {lol.name}
                </h1>
                <b>Voli:</b>
                <p>{lol.flights}</p>
                <b>Status:</b>
                <p>{lol.status}</p>

                <span
                  onClick={() =>
                    router
                      .push(`/prime-fasi-riutilizzabili/${lol.id}`)
                      .then(() => window.scrollTo(0, 0))
                  }
                  className="px-3 mt-4 cursor-pointer  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  target="_blank"
                  rel="noopener noreferrer canonical"
                >
                  Leggi di piu
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </LayoutComponent>
  );
}

export async function getServerSideProps() {
  const apiResponse = await fetch(`https://ll.thespacedevs.com/2.2.0/launcher`);

  const data = await apiResponse.json();

  return {
    props: {
      sta: data,
    },
  };
}
export default StazioneSpaziale;
