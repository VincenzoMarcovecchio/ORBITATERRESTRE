import { React, useState, useEffect } from "react";
import Link from "next/link";
import { LayoutComponent, SEO } from "@components/common";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import non from "../content/assets/immagine-non-trovata.png";
import { setCORS } from "google-translate-api-browser";

function Giorno({datas}) {

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


    const url =
    "https://mimmofranco.herokuapp.com/https://ll.thespacedevs.com/2.1.0/event/upcoming";

  const { data, error } = useSWR(url, fetcher);
console.log(data);
  return (
    <LayoutComponent>
      <SEO
        title={titlet || datas.title}
        description={translated || datas.explanation}
        imageUrl={datas.url}
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
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
        <section className="flex ">
          <aside>
            <h3 className="px-4 text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Eventi
            </h3>
            <div className="sm:px-0 md:px-4 flex flex-col">
              {data != undefined ? (
                data?.results?.map((la) => {
                  return (
                    <figure
                      key={la.date}
                      className=" relative w-full shadow-lg  mb-8 md:max-w-md"
                    >
                      {la.featured_image ? (
                        <img
                          loading="lazy"
                          className=" max-h-35 w-full"
                          src={featured_image}
                          alt={la.name}
                        />
                      ) : (
                        <img
                          className=" max-h-35 w-full"
                          src={non}
                          alt={la.name}
                        />
                      )}

                      <figcaption className="z-20 p-2">
                        <div className="flex ">
                          <b>Nome:&nbsp;</b>
                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.name}
                          </Link>
                        </div>
                        <div className="">
                          <b>Descrizione:&nbsp;</b>

                          <Link
                            className="z-20"
                            href={`/eventi-spaziali/${la.slug}`}
                          >
                            {la.description}
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  );
                })
              ) : (
                <b>{"caricamento supersonico in corso..."}</b>
              )}
            </div>
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export default Giorno;

export async function getStaticProps() {
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
      revalidate: 46400,
    };
  }
