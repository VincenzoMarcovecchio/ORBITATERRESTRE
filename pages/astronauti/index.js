import { React, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const defaultEndpoint =
  'https://ll.thespacedevs.com/2.1.0/astronaut/?limit=10&offset=10';

function Page() {
  const [defaultResults, setDefaultResults] = useState([]);

  const [name, setName] = useState('Italian');

  useEffect(() => {
    fetch(`https://ll.thespacedevs.com/2.1.0/astronaut/?nationality=${name}`)
      .then((res) => res.json())
      .then((data) => setDefaultResults(data.results));
  }, [name]);

  return (
    <LayoutComponent>
      <SEO title="Astronauti" />
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <Formik
          enableReinitialize
          initialValues={{ nationality: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.nationality) {
              errors.name = 'Oops ??';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
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
              <label htmlFor="nationality">Cerca per nazionalita`</label>
              <input
                className="input mt-2 p-2 text-black text-lg mb-3"
                type="text"
                name="nationality"
                placeHolder="es Italian"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
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

        <ul>
          {defaultResults.map((result) => {
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
                    <p className="mt-2 text-lg mb-3">{nationality}</p>
                    <p className="mt-2 text-lg mb-3">{bio}</p>
                  </figcaption>
                  <a
                    href="#"
                    className="px-3 mt-4  py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  >
                    Scopri di piu
                  </a>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </LayoutComponent>
  );
}

export default Page;
