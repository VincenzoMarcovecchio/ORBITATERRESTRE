import React from "react";
import { SEO } from "@components/common";



const NewComponent = () => {
  return (
    <>
      <SEO
        cano="si"
        slug="Starlink-Availability-Map"
        title="Starlink Availability Map"
        description="This renders the percentage of the day that a portion of the earth is covered by a Starlink satellite. (Red is no coverage, blue is all day coverage)."
      />
      <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
        You are looking at an iframed <a href="https://sebsebmc.github.io/starlink-coverage/index.html" target="_blank" rel="canonical noopener noreferrer">url</a>
      </h2>
      <iframe width="100%" height="750 " src="https://sebsebmc.github.io/starlink-coverage/index.html"></iframe>

    </>
  );
}

export default NewComponent