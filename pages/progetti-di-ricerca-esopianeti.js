import React from "react";
import {  SEO } from "@components/common";

export default function Errores() {
  return (
   <>
      <SEO
        title="Esplorazione Esopianeti"
        description="In media, si stima che esista almeno un pianeta per ogni stella della galassia. Ciò significa che c'è qualcosa nell'ordine di miliardi di pianeti solo nella nostra galassia, molti nella gamma di dimensioni della Terra. Questi pianeti al di fuori del nostro sistema solare sono noti come pianeti extrasolari."
      />

      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <iframe
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="w-full min-h-screen flex mb-4"
          width="420"
          height="515"
          src="https://exoplanets.nasa.gov/eyes-on-exoplanets/"
          alt="NASA esplorazione esopianeti"
        ></iframe>
      </div>
    </>
  );
}
