import { useState, useEffect } from "react";
import { SEO } from "@components/common";
import moment from "moment";
import { Lanci } from "../components/common/Lanci";

function Testas() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [defaultResults, setDefaultResults] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetch(
      `https://satellites.fly.dev/passes/25544?lat=${lat}&lon=${long}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => setDefaultResults(data));

    return () => {
      setSubmit(false);
    };
  }, [submit == true]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <>
      <SEO
        cano="si"
        slug="satellites-right-above-your-head"
        title={`Satelliti sopra la mia testa in questo momento`}
        description="Grazie ad alcune API open source è possibile capire quali satelliti stiano attraversando il cielo che abbiamo in comune"
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h3 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-8">
            Hey what's going on over your head 😮 🛰️
          </h3>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={getLocation}
          >
            Don't know your position?
          </button>

          <form
            className="form flex flex-col max-w-md mx-auto mt-12 mb-12"
            onSubmit={(e) => {
              e.preventDefault();
              setTimeout(() => {
                setSubmit(true);
              }, 400);
            }}
          >
            <label htmlFor="latitudine">Latitude:</label>
            <input
              className="input mt-2 p-2 text-black text-lg mb-3"
              type="number"
              step="any"
              name="latitudine"
              placeholder="es 34.9112212"
              onChange={(e) => setLat(e.target.value)}
              value={lat}
            />

            <label htmlFor="longitudine">Longitude:</label>
            <input
              className="input mt-2 p-2 text-black text-lg mb-3"
              type="number"
              step="any"
              name="longitudine"
              placeholder="es 57.9372988 "
              onChange={(e) => setLong(e.target.value)}
              value={long}
            />

            <button
              type="submit"
              className="px-3 mt-2 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Cerca
            </button>
          </form>
          {defaultResults.length > 0 && (
            <p>
              There are:&nbsp;{defaultResults.length}&nbsp;results&nbsp;(or rather
              limited to 5) for now
            </p>
          )}
          {defaultResults.length > 0 &&
            defaultResults.map(function (eachObj) {
              return (
                <div className="flex flex-row p-2 mt-4">
                  <div className="text-4xl font-bold font-display"> 🛰️ </div>
                  <div>
                    <details>
                      <summary>Rising</summary>
                      <p>
                        Illuminated by the sun:&nbsp;{" "}
                        {eachObj.rise.is_sunlit.toString()}
                      </p>
                      <p>
                        Date:&nbsp;{" "}
                        {moment(eachObj.rise.utc_datetime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                      <p>Visible:&nbsp; {eachObj.rise.visible.toString()}</p>
                      <p>Alt:&nbsp; {eachObj.rise.alt}</p>
                      <p>Az:&nbsp; {eachObj.rise.az}</p>
                      <p>Az_octant:&nbsp; {eachObj.rise.az_octant}</p>
                    </details>

                    <details>
                      <summary>Climax</summary>
                      <p>
                        Illuminated by the sun:&nbsp;{" "}
                        {eachObj.culmination.is_sunlit.toString()}
                      </p>
                      <p>
                        Date:&nbsp;
                        {moment(eachObj.culmination.utc_datetime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                      <p>
                        Visible:&nbsp; {eachObj.culmination.visible.toString()}
                      </p>
                      <p>Alt:&nbsp; {eachObj.culmination.alt}</p>
                      <p>Az:&nbsp; {eachObj.culmination.az}</p>
                      <p>Az_octant:&nbsp; {eachObj.culmination.az_octant}</p>
                    </details>

                    <details>
                      <summary>Sunset</summary>
                      <p>
                        Illuminated by the sun:&nbsp;{" "}
                        {eachObj.set.is_sunlit.toString()}
                      </p>
                      <p>
                        Date:&nbsp;
                        {moment(eachObj.set.utc_datetime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}{" "}
                      </p>
                      <p>Visible:&nbsp; {eachObj.set.visible.toString()}</p>
                      <p>Alt:&nbsp; {eachObj.set.alt}</p>
                      <p>Az:&nbsp; {eachObj.set.az}</p>
                      <p>Az_octant:&nbsp; {eachObj.set.az_octant}</p>
                    </details>
                  </div>
                </div>
              );
            })}
          <div>
            <small>
              For more information: https://satellites.fly.dev/
            </small>
          </div>
        </section>
        <hr className="mt-4" />
        <section className="flex">
          <aside>
            <h2 className="text-4xl md:px-4 font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Next launches
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
  );
}

export default Testas;
