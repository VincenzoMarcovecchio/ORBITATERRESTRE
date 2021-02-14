import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { LayoutComponent, Bio, SEO } from '@components/common';

import { setCORS } from 'google-translate-api-browser';
import dynamic from 'next/dynamic';

export default function Home({ datas }) {
  const [currentCategory, setCurrentCategory] = useState(null);

  const translateto = JSON.stringify(datas.explanation);
  const translatetwo = JSON.stringify(datas.title);
  const translate = setCORS('http://mimmofranco.herokuapp.com/');
  const [translated, setTranslated] = useState(null);
  const [titlet, setTitlet] = useState(null);

  useEffect(() => {
    translate(translateto, { to: 'it' })
      .then((res) => {
        setTranslated(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
    translate(translatetwo, { to: 'it' })
      .then((res) => {
        setTitlet(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const MapWithNoSSR = useMemo(() =>
    dynamic(() => import('../Map/Index'), {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    })
  );
  return (
    <LayoutComponent>
      <SEO title="Home" />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 max-w-screen-lg mx-auto ">
        <section>
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Immagine astronomica del giorno
          </h2>
          <figure>
            {datas.media_type === 'video' && (
              <iframe
                className="w-full mb-4"
                width="420"
                height="515"
                src={datas.url}
              ></iframe>
            )}
            {datas.media_type !== 'video' && (
              <img className="mb-4" src={datas.url} alt={datas.title} />
            )}
            <figcaption>
              <p className="mb-2">
                <b>Titolo:&nbsp;</b>
                {titlet || datas.title}
              </p>
              <p className="mb-2">
                <b>Descrizione:&nbsp;</b>
                {translated || datas.explanation}
              </p>
              <p className="mb-2">
                <b>©&nbsp;</b>
                {datas.copyright}
              </p>
            </figcaption>
          </figure>
        </section>
        <hr />
        <section className=" ">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Mappa delle segnalazioni
          </h2>
          <MapWithNoSSR />
        </section>
        <div className="display  flex  space-x-2 mt-8 mb-8 md:space-x-8"></div>
      </div>
    </LayoutComponent>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=lu9sT97c1NlwxywwfgHgQbqaxIXhfw6lMoT0B6nY`
  );
  const datas = await res.json();

  return {
    props: {
      datas,
    },
  };
}
