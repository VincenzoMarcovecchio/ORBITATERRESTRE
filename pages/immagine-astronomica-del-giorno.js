import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import { setCORS } from "google-translate-api-browser";
import { Lanci } from "../components/common/Lanci";

function Giorno({ datas }) {
  const translateto = JSON.stringify(datas.explanation);
  const translatetwo = JSON.stringify(datas.title);
  const translate = setCORS("https://mimmofranco.herokuapp.com/");
  const [translated, setTranslated] = useState(null);
  const [titlet, setTitlet] = useState(null);

  useEffect(() => {
    translate(translatetwo, { to: "it" })
      .then((res) => {
        setTitlet(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    translate(translateto, { to: "it" })
      .then((res) => {
        setTranslated(JSON.parse(res.text));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <SEO
        title={`NASA Immagine astronomica del giorno`}
        description={
          "La NASA pubblica ogni giorno l'immagine astronomica ritenuta piú importante, affascinante in base a scoperte, avvenimenti, periodi dell'anno"
        }
        slug="immagine-astronomica-del-giorno"
        cano="si"
        imageUrl={datas.url}
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-6 mx-auto mb-6">
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
              <img
                className="mb-4 h-full object-cover flex "
                src={datas.url}
                alt={datas.title}
              />
            )}
            <figcaption>
              <p className="">
                <strong className="font-extrabold">Titolo:&nbsp;</strong>
                {titlet || datas.title}
              </p>
              <p className="mb-2 pr-4">
                <strong className="font-extrabold">Descrizione:&nbsp;</strong>
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
        <section className="flex">
          <aside>
            <h3 className=" text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h3>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
  );
}

export default Giorno;

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
