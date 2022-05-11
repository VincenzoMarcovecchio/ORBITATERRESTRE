import React from "react";
import { SEO } from "@components/common";



const NewComponent = () => {
  return (
    <>
      <SEO
        cano="si"
        slug="mars-weather-in-real-time"
        title="Mars Weather App"
        description="The Mars Weather App built with the NASA API's"
      />

          <iframe width="100%" height="750 "src="https://mars-weather-insight.netlify.app/"></iframe>
  
    </>
  );
}

export default NewComponent