import React from "react";
import {  SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

function Thispage() {
  return (
   <>
      <SEO
        cano="si"
        slug="ISS-live-position"
        title="The position of the international space station in real time"
        description="The tracker shows where the Space Station is now and its path 90 minutes ago (-1.5 hours) and in 90 minutes (+1.5 hours). The dark overlay indicates where it is night in the world."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
          Tracking map
          </h2>
          <iframe
            className="w-full"
            src="https://isstracker.spaceflight.esa.int/"
            id="iss-pos"
            width="625"
            height="575"
            title="ESU ISS tracking map"
          >
            ESA ISS tracking map
          </iframe>
        </section>
        <hr />
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

export default Thispage;
