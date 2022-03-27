import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import { setCORS } from "google-translate-api-browser";
import { Lanci } from "../components/common/Lanci";
import Image from 'next/image'
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
        title={`NASA Astronomic picture of the day`}
        description={
          "APOD"
        }
        slug="astronomic-picture-of-the-day"
        cano="si"
        imageUrl={datas.url}
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-6 mx-auto mb-6">
            NASA Astronomic picture of the day
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
              <p className="">
                <strong className="font-extrabold">Title:&nbsp;</strong>
                {datas.title}
              </p>
              <p className="mb-2 pr-4">
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
        <hr />
        <section className="flex">
          <aside>
            <h3 className=" text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Next Launches
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
