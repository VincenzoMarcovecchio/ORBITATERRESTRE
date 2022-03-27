import React, { useState, useEffect } from "react";
import {  SEO } from "@components/common";
import { setCORS } from "google-translate-api-browser";
import { QuickLinks } from "../components/common/quickLinks";
import { Lanci } from "../components/common/Lanci";
import Image from 'next/image'
function Home({ datas }) {
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
    <React.Fragment>
   
        <SEO title="Home" description="Una guida allo spazio semplificata per noi comuni umani" />
        <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
          <section className="w-full md:max-w-screen-lg">
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Astronomic picture of the day
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
                
                <Image
                  className="mb-4 emma sm:h-full md:h-5/6 object-cover flex"
                  src={datas.url}
                  alt={datas.title}
                  width="850"
                  height="650"
                  layout="responsive"
                />
              )}
              <figcaption>
                <p className="mb-2 mt-4">
                  <strong className="font-extrabold">Title:&nbsp;</strong>
                  {datas.title}
                </p>
                <p className="mb-2">
                  <strong className="font-extrabold">Description:&nbsp;</strong>
                  {datas.explanation}
                </p>
                <p className="mb-2">
                  <b>©&nbsp;</b>
                  {datas.copyright}
                </p>
              </figcaption>
            </figure>
        
          </section>

          <hr className="mt=4" />
          <section className="flex">
            <aside>
            <h2 className="text-4xl md:px-4 font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
               Next Launches
              </h2>
              <Lanci />
            </aside>
          </section>
        </div>
    
    </React.Fragment>
  );
}

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

export default Home;
