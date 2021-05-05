import React from "react";
import Link from "next/link";
import equipaggio from "../../content/assets/lanci-con-equipaggio.jpg";
import fasi from "../../content/assets/fasi-riutilizzabili.jpg";
import stazione from "../../content/assets/stazione-spaziale.jpg";
export function QuickLinks() {
  return (
    <div className="grid place-items-center mt-4">
      <div>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-900 h-full md:h-80  shadow-lg rounded p-3">
            <div className="group relative">
              <img
                className="w-full object-cover h-full md:h-40  md:w-72 block rounded"
                src={equipaggio}
                alt="lanci previsti di equipaggio"
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <Link
                  href="/lanci-missioni-spaziali"
                  as="/lanci-missioni-spaziali"
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    Scopri di piu'
                  </button>
                </Link>
              </div>
            </div>
            <div class="pt-4">
              <h3 class="text-white text-lg">Lanci </h3>
              <p class="text-gray-400">I lanci previsti di equipaggio e non</p>
            </div>
          </div>
          <div className="bg-gray-900 h-full md:h-80  shadow-lg rounded p-3">
            <div className="group relative">
              <img
                className="w-full h-full md:h-40  object-cover md:w-72  block rounded"
                src={fasi}
                alt="fasi riutilizzabili"
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <Link
                  href="/prime-fasi-riutilizzabili/10"
                  as="/prime-fasi-riutilizzabili/10"
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    Scopri di piu'
                  </button>
                </Link>
              </div>
            </div>
            <div class="pt-4">
              <h3 class="text-white text-lg">Fasi riutilizzabili </h3>
              <p class="text-gray-400">I lanciatori in grado di riatterrare</p>
            </div>
          </div>
          <div className="bg-gray-900 h-full md:h-80  shadow-lg rounded p-3">
            <div className="group relative">
              <img
                className="w-full h-full md:h-40  object-cover md:w-72  block rounded"
                src={stazione}
                height="400"
                width="400"
                alt="stazioni spaziali"
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  Scopri di piu'
                </button>
              </div>
            </div>
            <div class="pt-4">
              <h3 class="text-white text-lg">Stazioni Spaziali </h3>
              <p class="text-gray-400">La storia delle stazioni spaziali</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
