import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import dynamic from "next/dynamic";
const Lanci = dynamic(
  () => import("../components/common/Lanci").then((mod) => mod.Lanci),
  { loading: () => <p>loading</p> }
);
function Retrogrado() {
  const [data, setData] = useState("");
  const [defaultResults, setDefaultResults] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [oggi, setOggi] = useState(null);

  useEffect(() => {
    fetch(`https://mercuryretrogradeapi.com?date=${data}`)
      .then((res) => res.json())
      .then((json) => setDefaultResults(json));

    return () => {
      setSubmit(false);
    };
  }, [submit]);

  useEffect(() => {
    fetch(`https://mercuryretrogradeapi.com`)
      .then((resa) => resa.json())
      .then((data) => setOggi(data));
  }, []);

  const handle = () => {
    setSubmit(true);
  };
  return (
    <>
      <SEO
        cano="si"
        title="Mercury retrograde, live data"
        imageUrl="mercurio-in-retrogrado-previsioni-astronomiche-in-tempo-reale.jpg"
        slug="mercury-in-retrograde"
        description="Since Mercury is the closest planet to the Sun, its orbit is much shorter than Earth's. About three or four times a year, Mercury overtakes the Earth, and that's when we experience a Mercury retrograde period. If you were in a car and another car passed you, you could tell it was going faster than you. But if it slowed down and then you passed it, it would appear that that car was actually going backwards."
      />

      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Is Mercury in retrograde??
          </h2>
          <img
            src="/mercurio-in-retrogrado-previsioni-astronomiche-in-tempo-reale.jpg"
            alt="mercurio-in-retrogrado"
            className="mb-6"
          />
          <div className="flex flex-col">
            {oggi !== null && (
              <h3 className="text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
                TODAY:&nbsp;{oggi.is_retrograde === false ? "FALSO" : "VERO"}
              </h3>
            )}
            {oggi !== null &&
              (oggi.is_retrograde === false ? (
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="https://giphy.com/embed/TLb0rHBBrn3qwcq0xE"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="https://giphy.com/embed/KzyMcEfDh4Jiw"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
          </div>
          <form
            className="form flex flex-col max-w-md mx-auto mt-12 mb-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="data">Check other dates</label>
            <input
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="input mt-2 p-2 text-black text-lg mb-3"
              type="text"
              name="data"
              placeholder="es 2016-10-01"
            />
            <button
              className="px-3 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              onClick={handle}
            >
              Search
            </button>
            <p>
             For more information visit:{" "}
              <a
                href="https://mercuryretrogradeapi.com/about.html"
                rel="canonical noopener noreferrer"
                target="_blank"
              >
                mercuryretrogradeapi
              </a>
            </p>
          </form>
          {defaultResults && (
            <h3 className="text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              {defaultResults.is_retrograde === false ? "FALSO" : "VERO"}
            </h3>
          )}
          <article>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Does Mercury Really Move Backwards?            </h2>
            <p>
            Mercury doesn't actually move backwards. Since Mercury is the
              planet located closer to the Sun, its orbit is much more
              short of the terrestrial one. About three or four times a year,
              Mercury overtakes the Earth, and that's when we experience the period
              retrograde of Mercury.
              <br />
              If you were in a car and another car you
              overtaking, you could say he was going faster than you.
              On the other hand, if a car has slowed down and then you have overtaken it,
              it would appear that that car was actually going
              backwards. Then when the car accelerates and overtakes you by
              again, it throws up all the dust on the road.
              <br />
              As Mercury accelerates, it is like a train that flies, creating one
              powerful and turbulent gust of "wind" in its wake. There
              turbulence that Mercury creates when retrograde could
              affect what we feel on Earth in our life
              daily.
            </p>
            <blockquote className="mt-4 mb-4">
             A best article on the web:&nbsp;
              <a
                href="https://www.astrologyzone.com/everything-you-need-to-know-about-mercury-retrograde/"
                rel="canonical noopener noreferrer"
                target="_blank"
              >
                here
              </a>
            </blockquote>
          </article>
        </section>

        <hr className="mt-4 mb-4" />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
             Next Launches
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
  );
}
export default Retrogrado;
