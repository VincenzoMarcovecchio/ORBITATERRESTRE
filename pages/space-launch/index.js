import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import { Formik } from "formik";
import Image from 'next/image'
import { useRouter } from "next/router";

const LanciIndex = () => {
  const [name, setName] = useState("");
  const [lancid, setLancid] = useState([]);
  const [crewed, setCrewed] = useState(false);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=${name}&is_crewed=${crewed}&limit=50&offset=50&include_suborbital=true&related=false`
    )
      .then((data) => data.json())
      .then((res) => setLancid(res));
  }, [crewed, name]);

  return (
    <>
      <SEO
        title="Dataset of space launches"
        description="Search among all the launches made or about to leave, stay up to date!"
        cano="si"
        slug={`space-launch`}
        imageUrl={`https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/antares2520230252b_image_20191102024633.jpeg`}
      />

    <div className=" max-w-7xl mx-auto px-4  sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Dataset of space launches
        </h1>

        <div className=" flex-wrap max-w-7xl mx-auto px-4 sm:px-6 display flex items-start">
          <span
            className={`${crewed
                ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
                : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setCrewed(true)}
          >
            With crew
          </span>
          <span
            className={`${!crewed
                ? " underline  border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
                : "m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setCrewed(false)}
          >
            Unmanned
          </span>
        </div>

        
        <div className="form flex flex-col max-w-md mx-auto mt-12 mb-12"
>
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
                <label htmlFor="nationality">Search the dataset</label>
                <input
                  className="input mt-2 p-2 text-black text-lg mb-3"
                  type="text"
                  name="nationality"
                  placeholder="es SpaceX"
                  onChange={handleChange}
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
                  Search
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
                  <Image
                    className="sm:w-full md:w-1/3 object-cover"
                    src={lol.image}
                    alt={lol.name}
                    width="350"
                    height="350"
                    layout="intrinsic"
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
                  <p>
                    <b className="font-extrabold">Status:</b>&nbsp;
                    {lol.status.abbrev}
                  </p>
                  <p>
                    <b className="font-extrabold">Description:</b>&nbsp;
                    {lol.status.description}
                  </p>
                  <p className="mb-6">
                    <b className="font-extrabold">Launch platform:</b>
                    &nbsp;
                    {lol.pad}
                  </p>

                  <span
                    onClick={() =>
                      router
                        .push(`/space-launch-single/${lol.id}/`)
                        .then(() => window.scrollTo(0, 0))
                    }
                    className="px-3 cursor-pointer mt-6 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    target="_blank"
                    rel="noopener noreferrer canonical"
                  >
                    Find out more
                  </span>
                </div>
              </article>
            );
          })
        ) : (
          <p>{lancid.detail || "supersonic loading..."}</p>
        )}
      </div>
    </>
  );
};

export default LanciIndex;
