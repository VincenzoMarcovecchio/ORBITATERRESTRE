import React, { useState, useEffect } from "react";
import { LayoutComponent, Bio, SEO } from "@components/common";
import { setCORS } from "google-translate-api-browser";
import { QuickLinks } from "../components/common/quickLinks";
import { Lanci } from "../components/common/Lanci";

function Home({ datas }) {
  const translateto = JSON.stringify(datas.explanation);
  const translatetwo = JSON.stringify(datas.title);
  const translate = setCORS("https://mimmofranco.herokuapp.com/");
  const [translated, setTranslated] = useState(null);
  const [titlet, setTitlet] = useState(null);

  useEffect(() => {
    translate(translateto, { to: "it" })
      .then((res) => {
        setTranslated(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    translate(translatetwo, { to: "it" })
      .then((res) => {
        setTitlet(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <React.Fragment>
      <LayoutComponent>
        <SEO title="Home" />
        <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
          <section className="w-full md:max-w-screen-lg">
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Immagine astronomica del giorno
            </h2>
            <figure className="sm:pr-0 ">
              {datas.media_type === "video" && (
                <iframe
                  className="w-full flex mb-4"
                  width="420"
                  height="515"
                  src={datas.url}
                ></iframe>
              )}
              {datas.media_type !== "video" && (
                <img className="mb-4 flex " src={datas.url} alt={datas.title} />
              )}
              <figcaption>
                <p className="mb-2">
                  <b>Titolo:&nbsp;</b>
                  {titlet || datas.title}
                </p>
                <p className="mb-2 pr-4">
                  <b>Descrizione:&nbsp;</b>
                  {translated || datas.explanation}
                </p>
                <p className="mb-2">
                  <b>©&nbsp;</b>
                  {datas.copyright}
                </p>
              </figcaption>
            </figure>
            <QuickLinks />
          </section>

          <hr />
          <section className="flex">
            <aside>
              <h3 className="text-center text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
                Prossimi Lanci
              </h3>
              <Lanci />
            </aside>
          </section>
        </div>
      </LayoutComponent>
    </React.Fragment>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const resat = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );
  const datas = await resat.json();

  return {
    props: {
      datas,
    },
  };
}

export default Home;
