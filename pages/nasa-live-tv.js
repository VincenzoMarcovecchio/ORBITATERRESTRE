
import { SEO } from "@components/common";


function NasaLive() {

  return (
    <>
      <SEO
        cano="si"
        slug="nasa-live-tv"
        title="Nasa Live TV"
        description="NASA TV broadcasts a variety of regularly scheduled and pre-recorded educational and public relations programs 24 hours a day on its various channels. The network also provides a variety of live programs, such as coverage of missions, events (space walks, media interviews, educational broadcasts), press conferences and rocket launches."
      />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
           NASA Live TV
          </h2>
          <iframe
            style={{ width: "100%" }}
            width="760"
            height="515"
            src="https://www.youtube.com/embed/21X5lGlDOfg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

      </div>
    </>
  );
}

export default NasaLive;
