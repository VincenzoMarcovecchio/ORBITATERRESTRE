
import Link from "next/link";
import { SEO } from "@components/common";
import { useRouter } from "next/router";
import Image from 'next/image'

function Marte({ curiosity }) {

  const router = useRouter();
  return (
    <>
      <SEO
        title="The eyes of mars"
        description="Cameras installed on mars"
      />

      <section className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col w-full items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          The eyes of curiosity
        </h1>
        <label htmlFor="sol">
          This input range goes from 0 to 4500{" "}
          <Link replace href="/post/come-si-misurano-i-giorni-su-marte/">
            SOL
          </Link>{" "}
          (check URL)
        </label>
        <input
          draggabletrack
          formatlabel={(e) => e.target.value.toFixed(2)}
          list="tickmarks"
          onChange={(e) =>
            router
              .push(`/new-mars-discoveries/${e.target.value}`)
              .then(() => window.scrollTo(0, 0))
          }
          id="sol"
          name="sol"
          type="range"
          min="1000"
          max="4500"
        />

        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="500"></option>
          <option value="1000"></option>
          <option value="1500"></option>
          <option value="2000"></option>
          <option value="2500"></option>
          <option value="3020"></option>
          <option value="3500"></option>
          <option value="4000"></option>
          <option value="4500"></option>
        </datalist>

        {curiosity.photos.length > 1
          ? curiosity.photos.map((lol) => {
            return (
              <article
                className="sm:grid mx-auto md:flex sm:flex-col md:flex-row w-full max-w-4xl mb-12 shadow-lg rounded-lg overflow-hidden"
                key={lol.id}
              >
                <Image
                  className="sm:w-full md:w-2/3 object-cover"
                  src={lol.img_src}
                  alt={lol.camera.fullname}
                  width="350"
                  height="350"
          
                />
                <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                  <h2 className="text-3xl font-bold text-yellow-600 font-display">
                    {lol.camera.full_name}
                  </h2>
                  <p className="mt-2 text-lg mb-3">
                    <b>Terrestrial date:&nbsp;{lol.earth_date}</b>
                  </p>
                  <details>
                    <summary>{lol.rover.name}</summary>
                    <p>
                      Landing day:&nbsp;{lol.rover.landing_date}
                    </p>
                    <p>
                      Launch day:&nbsp;
                      {lol.rover.launch_date}
                    </p>
                    <p>
                      Rover id:&nbsp;
                      {lol.rover.id}
                    </p>
                    <p>
                      Camera:&nbsp;
                      {lol.camera.full_name}
                    </p>
                    <p>Status:&nbsp;{lol.rover.status}</p>
                  </details>
                </div>
              </article>
            );
          })
          : "niente qui"}
      </section>
      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <iframe
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
          className="w-full flex mb-4"
          width="420"
          height="515"
          src="https://www.arcgis.com/apps/Viewer/index.html?appid=ee4fd19d7d514bb192359534f27169b8"
          alt="punto di atterraggio di curiosity"
        ></iframe>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${pageNumber}&page=8&api_key=lu9sT97c1NlwxywwfgHgQbqaxIXhfw6lMoT0B6nY`
  );

  const news = await res.json();

  const curiosity = news;

  // Pass data to the page via props

  return {
    props: {
      curiosity,
    },
  };
}
export default Marte;
