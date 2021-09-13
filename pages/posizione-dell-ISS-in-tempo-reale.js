import React from "react";
import { LayoutComponent, SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";

function Thispage() {
  return (
    <LayoutComponent>
      <SEO
        cano="si"
        slug="posizione-dell-ISS-in-tempo-reale"
        title="La posizione della stazione spaziale internazionale in tempo reale "
        description="Il tracker mostra dove si trova la Stazione Spaziale in questo momento e il suo percorso 90 minuti fa (-1,5 ore) e tra 90 minuti (+1,5 ore). La sovrapposizione scura indica dove è notte nel mondo."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
            Mappa di monitoraggio
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
              Prossimi Lanci
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export default Thispage;
