
import { SEO } from "@components/common";

function Eventiqq() {
  return (
    <>
      <SEO
        cano="si"
        slug="terrestrial-events"
        title="Natural terrestrial events that are happening"
        description="Using client applications, such as NASA's EOSDIS Worldview, users can navigate around the world daily and search for natural events as they occur. Storms are regularly spotted in the tropics, sandstorms over deserts, forest fires in the summer. These events occur constantly, and NASA's NRT images can represent them all using a variety of different data parameters. However, the user experience is personalized, and therefore limited, by the client application. What if there was an API that provided a curated list of natural events and provided a way to link those events to event-related NRT image layers? Enter EONET."
      />
      <iframe
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="w-full min-h-screen flex mb-4"
        width="420"
        height="515"
        src="https://worldview.earthdata.nasa.gov/"
        alt="NASA"
      ></iframe>
      <div className=" max-w-7xl mx-auto  px-4 sm:px-6 sm:px-6 display flex flex-col items-start"></div>
    </>
  );
}

export default Eventiqq;
