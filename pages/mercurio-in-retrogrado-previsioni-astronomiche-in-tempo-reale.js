import React, { useState, useEffect } from "react";
import { LayoutComponent, SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

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
    <LayoutComponent>
      <SEO
        cano="si"
        title="Il Retrogrado di Mercurio, le previsioni in tempo reale"
        imageUrl="mercurio-in-retrogrado-previsioni-astronomiche-in-tempo-reale.jpg"
        slug="mercurio-in-retrogrado-previsioni-astronomiche-in-tempo-reale"
        description="Poiché Mercurio è il pianeta situato più vicino al Sole, la sua orbita è molto più corta di quella terrestre. Circa tre o quattro volte l'anno, Mercurio supera la Terra, ed è allora che sperimentiamo un periodo retrogrado di Mercurio. Se fossi in una macchina e un'altra macchina ti sorpassasse, potevi dire che stava andando più veloce di te. Ma se ha rallentato e poi l'hai superato, sembrerebbe che quell'auto stesse effettivamente andando all'indietro."
      />

      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Mercurio in retrocessione??
          </h2>
          <img
            src="/mercurio-in-retrogrado-previsioni-astronomiche-in-tempo-reale.jpg"
            alt="mercurio-in-retrogrado"
            className="mb-6"
          />
          <div className="flex flex-col">
            {oggi !== null && (
              <h3 className="text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
                OGGI:&nbsp;{oggi.is_retrograde === false ? "FALSO" : "VERO"}
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
            <label htmlFor="data">Controlla altre date</label>
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
              Cerca
            </button>
            <p>
              Per ulteriori informazioni visitare il sito:{" "}
              <a
                href="https://mercuryretrogradeapi.com/about.html"
                rel="canonical noopener noreferrer"
                target="_blank"
              >
                mercuryretrogradeapi
              </a>
            </p>
          </form>
          {submit !== false && (
            <h3 className="text-3xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              {defaultResults.is_retrograde === false ? "FALSO" : "VERO"}
            </h3>
          )}
          <article>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Mercurio si muove davvero all'indietro?
            </h2>
            <p>
              Mercurio in realtà non si muove all'indietro. Poiché Mercurio è il
              pianeta situato più vicino al Sole, la sua orbita è molto più
              corta di quella terrestre. Circa tre o quattro volte all'anno,
              Mercurio supera la Terra, ed è allora che sperimentiamo il periodo
              retrogrado di Mercurio.
              <br />
              Se tu ti trovassi in una macchina e un'altra macchina ti
              sorpassasse, potresti dire che stava andando più veloce di te.
              Invece se una macchina ha rallentato e poi l'hai superata,
              sembrerebbe che quell'auto stesse effettivamente andando
              all'indietro. Poi, quando la macchina accelera e ti supera di
              nuovo, solleva tutta la polvere sulla strada.
              <br />
              Mentre Mercurio accelera, è come un treno che vola, creando una
              potente e turbolenta raffica di "vento" nella sua scia. La
              turbolenza che Mercurio crea quando retrograda potrebbe
              influenzare ciò che sentiamo sulla Terra nella nostra vita
              quotidiana.
            </p>
            <blockquote className="mt-4 mb-4">
              Uno dei migliori articoli a riguardo che ho trovato sul web è
              questo:
              <a
                href="https://www.astrologyzone.com/everything-you-need-to-know-about-mercury-retrograde/"
                rel="canonical noopener noreferrer"
                target="_blank"
              >
                qui
              </a>
            </blockquote>
          </article>
        </section>

        <hr className="mt-4 mb-4" />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}
export default Retrogrado;
