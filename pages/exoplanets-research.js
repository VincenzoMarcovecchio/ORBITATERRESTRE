import React from "react";
import { SEO } from "@components/common";

export default function Esoplanets() {
  return (
    <>
      <SEO
        cano="si"
        slug={`exoplanets-research`}
        title="Exploration of exoplanets"
        description="On average, it is estimated that there is at least one planet for every star in the galaxy. This means that there is something on the order of billions of planets in our galaxy alone, many in the size range of the Earth. These planets outside our solar system are known as exoplanets."
      />

      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <iframe
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full min-h-screen flex mb-4"
          width="420"
          height="515"
          src="https://exoplanets.nasa.gov/eyes-on-exoplanets/"
          alt="NASA Exploration of exoplanets"
        ></iframe>
      </div>
    </>
  );
}
