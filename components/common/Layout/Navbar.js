import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import useOnclickOutside from "react-cool-onclickoutside";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  const ref = useOnclickOutside(() => {
    setFlyer(false);
    setFlyerTwo(false);
  });

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}

      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"} as={`/`}>
              <div className="flex ">
                <img
                  className="cursor-pointer h-12 w-auto md:h-14"
                  src={`/cosmos.png`}
                  alt="astronauta nello spazio"
                />
                <span className="font-xl md:mt-2 ml-4 flex flex-col cursor-pointer uppercase font-bold">
                  <p className="font-xl uppercase font-bold">orbita</p>{" "}
                  terrestre
                </span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className=" dark:bg-gray-700 antialiased dark:text-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href={"/news-spaziali-internazionali"}
              as={`/news-spaziali-internazionali`}
            >
              News Internazionali
            </Link>
            <div className="relative">
              <button
                type="button"
                className="
                   group  rounded-md  inline-flex items-center text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className="px-1">Dallo Spazio </span>
                {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-2 h-5 w-5  transition ease-out duration-200"
                      : " transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5  "
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                ref={ref}
                className={
                  flyer
                    ? " z-20 opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "  translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div
                  className={
                    flyer
                      ? "z-20 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      : "max-h-0 max-w-0 opacity-0 hidden"
                  }
                >
                  <div
                    className={
                      flyer
                        ? " z-20 relative grid gap-6 bg-white flyer-container px-5 py-6 sm:gap-8 sm:p-8"
                        : "hidden "
                    }
                  >
                    {/* <div
                      className={
                        flyer
                          ? "z-20 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          : "hidden"
                      }
                    > */}
                    {/* Heroicon name: outline/chart-bar */}
                    {/* <svg
                        className={"flex-shrink-0 h-6 w-6 text-indigo-600"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#4F46E5"
                        viewBox="0 0 24 24"
                        stroke="i#4F46E5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 470 470"
                        enableBackground="new 0 0 470 470"
                      >
                        <g>
                          <path d="m63.613,281.405c0,4.143 3.358,7.5 7.5,7.5h327.773c4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-327.773c-4.142,0-7.5,3.358-7.5,7.5z" />
                          <path d="m466.697,275.189c-31.474-21.253-71.588-37.993-116.197-48.561l-21.401-55.644c-5.063-13.163-20.076-23.475-34.18-23.475h-52.419v-34.52c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v34.52h-52.419c-14.104,0-29.117,10.312-34.18,23.475l-21.401,55.644c-44.609,10.568-84.724,27.308-116.197,48.561-2.065,1.395-3.303,3.724-3.303,6.216s1.238,4.821 3.303,6.216c28.176,19.027 63.597,34.577 102.724,45.161 0.476,17.564 17.098,31.728 37.477,31.728h182.992c20.379,0 37.001-14.164 37.477-31.728 39.127-10.583 74.548-26.134 102.724-45.161 2.065-1.395 3.303-3.724 3.303-6.216s-1.238-4.821-3.303-6.216zm-311.796-98.82c2.84-7.383 12.27-13.859 20.18-13.859h119.838c7.91,0 17.34,6.477 20.18,13.859l18.9,49.141h-197.998l18.9-49.141zm200.646,143.141h-182.043c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5 7.5,7.5h175.248c-1.614,8.353-11.149,15-22.256,15h-182.992c-11.108,0-20.642-6.647-22.256-15h22.256c4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-29.051c-34.926-9.024-66.83-22.105-93.069-38.105 29.12-17.768 64.989-31.819 104.543-40.895h218.146c39.554,9.075 75.423,23.127 104.543,40.895-26.239,15.999-58.143,29.08-93.069,38.105z" />
                        </g>
                      </svg> */}

                    {/* <div className={flyer ? "ml-4" : " hidden"}>
                        <Link
                          href="/mappa-segnalazioni-ufo-abruzzo"
                          as="/mappa-segnalazioni-ufo-abruzzo"
                        >
                          Segnalazioni UFO
                        </Link>
                        <p className={flyer ? "mt-1 text-sm " : "none"}>
                          Segnalazioni avvenute nella regione Abruzzo
                        </p>
                      </div> */}
                    {/* </div> */}
                    <a
                      style={{ textDecoration: "none" }}
                      href="/nuove-scoperte-su-marte/3000"
                      as="/nuove-scoperte-su-marte/3000"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/cursor-click */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>

                      <div className="ml-4">
                        <span>
                          Marte
                          <p className="innerlink">
                            Immagini del rover Curiosity
                          </p>
                        </span>
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/shield-check */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium ">Cyber Spazio</p>
                        <p className="mt-1 text-sm innerlink ">
                          Dominii e scambi di informazioni attraverso le reti
                          informatiche e le loro infrastrutture fisiche.
                        </p>
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/view-grid */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <Link href="/techport" as="/techport">
                          <p className="text-base font-medium ">Techport</p>
                        </Link>
                        <Link href="/techport" as="/techport">
                          <p className="mt-1 text-sm innerlink ">
                            Programmi ufficiali NASA attivi in 2021
                          </p>
                        </Link>
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/refresh */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <div className="ml-4">
                        <Link
                          as="/telescopi-e-metodi-utilizzati-per-lesplorazione-di-esopianeti"
                          href="/telescopi-e-metodi-utilizzati-per-lesplorazione-di-esopianeti"
                        >
                          <p className="text-base font-medium ">Telescopi</p>
                        </Link>
                        <Link
                          as="/telescopi-e-metodi-utilizzati-per-lesplorazione-di-esopianeti"
                          href="/telescopi-e-metodi-utilizzati-per-lesplorazione-di-esopianeti"
                        >
                          <p className="mt-1 text-sm innerlink ">
                            Telescopi usati per l'esplorazioni di esopianeti ed
                            altro
                          </p>
                        </Link>
                      </div>
                    </a>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <Link as="nasa-live" href="/nasa-live">
                        <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium  hover:bg-gray-100">
                          <svg
                            className="flex-shrink-0 h-6 w-6 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="ml-3">NASA Live</span>
                        </a>
                      </Link>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium  hover:bg-gray-100"
                      >
                        {/* Heroicon name: outline/phone */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="ml-3">Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                type="button"
                className="group  rounded-md  inline-flex items-center text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
              >
                <span className="px-1">Missioni</span>
                {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
                <svg
                  className={
                    flyerTwo === true
                      ? "z-20 transform rotate-180 ml-2 h-5 w-5   transition ease-out duration-200"
                      : "transform transition ease-out duration-200 rotate-0 ml-2 h-5 w-5  "
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                ref={ref}
                className={
                  flyerTwo
                    ? " z-20 opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "  translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div
                  className={
                    flyerTwo
                      ? "z-20 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      : "hidden opacity-0 "
                  }
                >
                  <div className="relative grid gap-6 flyer-container bg-white dark:bg-yellow px-5 py-6 sm:gap-8 sm:p-8">
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      {/* Heroicon name: outline/support */}
                      <a
                        style={{ textDecoration: "none" }}
                        href="/agenzie-spaziali/10"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <div className="ml-4">
                          <Link
                            href="/agenzie-spaziali/10"
                            as="/agenzie-spaziali/10"
                          >
                            <span>
                              <p className="text-base font-medium "> Agenzie</p>
                              <p className="mt-1 text-sm innerlink">
                                Una lista delle agenzie che si occupano di
                                missioni nello spazio
                              </p>
                            </span>
                          </Link>
                        </div>
                      </a>
                    </div>
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/astronauti"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4">
                          Astronauti
                          <p className="mt-1 text-sm innerlink">
                            Tutti coloro che hanno fatto parte ad una spedizione
                            nello spazio
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      {/* Heroicon name: outline/calendar */}
                      <a
                        style={{ textDecoration: "none" }}
                        href="/eventi-spaziali"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4">
                          Eventi
                          <p className="mt-1 text-sm innerlink">
                            Eventi passati e futuri su tutto quello che riguarda
                            l'esplorazione spaziale
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/lanci-missioni-spaziali"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div className="ml-4">
                          Programmi
                          <p className="mt-1 text-sm innerlink">
                            Una lista dei programmi che le agenzie hanno portato
                            a termine o che porteranno a termine
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <Link
                        href="/stazione-spaziale"
                        as="/stazione-spaziale"
                        className="text-sm tracking-wide font-medium  uppercase"
                      >
                        Stazioni spaziali
                      </Link>
                      <ul className="mt-4 space-y-4">
                        <li className="text-base truncate">
                          <Link
                            href="/piattaforme-lancio-pad/10/"
                            as="/piattaforme-lancio-pad/10"
                          >
                            Pad
                          </Link>
                        </li>
                        <li className="text-base truncate">
                          <Link
                            href="/la-storia-di-spaceX-in-timeline-component"
                            as="/la-storia-di-spaceX-in-timeline-component"
                          >
                            SpaceX in timeline
                          </Link>
                        </li>
                        <li className="text-base truncate">
                          <Link
                            href="/monitorazioni-eventi-terrestri"
                            as="/monitorazioni-eventi-terrestri"
                          >
                            Eventi Terrestri
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 72 72"
                version="1.1"
              >
                <title>Facebook</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Social-Icons---Circle"
                    transform="translate(-152.000000, -43.000000)"
                  >
                    <g
                      id="Facebook"
                      transform="translate(152.000000, 43.000000)"
                    >
                      <rect
                        id="Oval"
                        fill="#4460A0"
                        x="0"
                        y="0"
                        width="72"
                        height="72"
                        rx="8"
                      />
                      <path
                        d="M60.4641463,13.4173171 L60.4641463,22.7278049 L54.9382927,22.7421951 C50.6068293,22.7421951 49.7721951,24.8 49.7721951,27.807561 L49.7721951,34.4702439 L60.09,34.4702439 L58.7517073,44.8887805 L49.7721951,44.8887805 L49.7721951,72 L39.0097317,72 L39.0097317,44.8887805 L30,44.8887805 L30,34.4702439 L39.0097317,34.4702439 L39.0097317,26.7858537 C39.0097317,17.8639024 44.4478049,13 52.42,13 C56.2204634,13 59.5,13.2878049 60.4641463,13.4173171 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 72 72"
                version="1.1"
              >
                <title>Twitter</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Social-Icons---Rounded"
                    transform="translate(-264.000000, -43.000000)"
                  >
                    <g
                      id="Twitter"
                      transform="translate(264.000000, 43.000000)"
                    >
                      <path
                        d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                        id="Rounded"
                        fill="#4DC8F1"
                      />
                      <path
                        d="M55.0865399,25.7148754 C55.7080938,39.5659738 45.3799204,55.0092879 27.0953855,55.0092879 C21.5344243,55.0092879 16.3579537,53.3781513 12,50.5841073 C17.2236474,51.1997641 22.4390388,49.7514374 26.5787999,46.505676 C22.2703818,46.4266549 18.6330532,43.5795371 17.3805101,39.6674038 C18.9231903,39.9622586 20.4411028,39.876161 21.8269202,39.4999263 C17.090373,38.5469556 13.8222026,34.2809966 13.9283503,29.7190034 C15.2563762,30.4561404 16.7754681,30.8996019 18.3900929,30.9491375 C14.0038331,28.0194604 12.7619048,22.2285125 15.3424738,17.8021524 C20.1981424,23.7605779 27.4539289,27.6809671 35.6390977,28.0925844 C34.2037447,21.9312988 38.8766033,16 45.232493,16 C48.0654578,16 50.6247973,17.1947516 52.4198732,19.1089488 C54.6631284,18.6678461 56.7707504,17.8481498 58.6731535,16.7194457 C57.9383754,19.019313 56.3768244,20.9500221 54.3435058,22.1671827 C56.3355447,21.9301194 58.2332301,21.4005602 60,20.6174259 C58.68023,22.592953 57.0101725,24.3266991 55.0865399,25.7148754"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div> */}
            <Header />
          </div>
        </div>

        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          ref={ref}
          className={
            open
              ? "block z-20 opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-0 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div
            className={
              "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-50 flyer-container dark:bg-yellow divide-y-2 divide-gray-50"
            }
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="cursor-pointer h-10 w-auto md:h-14"
                    src={`/cosmos.png`}
                    alt="astronauta nello spazio"
                  />
                </div>
                <div>
                  {" "}
                  <Header />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white flyer-container rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/eventi-spaziali"
                    as="/eventi-spaziali"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 ">
                      {/* Heroicon name: outline/chart-bar */}

                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium ">
                        Eventi
                      </span>
                    </a>
                  </Link>
                  <Link
                    replace
                    href="/nuove-scoperte-su-marte/3000/"
                    as="/nuove-scoperte-su-marte/3000"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium ">
                        Scoperte Su Marte
                      </span>
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>{" "}
                    <Link replace href="/astronauti/" as="/astronauti/">
                      <span className="ml-3 text-base font-medium ">
                        Astronauti
                      </span>
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}

                    <span className="ml-3 text-base font-medium ">
                      Integrations
                    </span>
                  </a>
                  <a
                    href="/sistema-solare"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium ">
                      Sistema Solare
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  replace
                  href="/piattaforme-lancio-pad/10/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Piattaforme
                </Link>
                <Link
                  replace
                  className="text-base font-medium  hover:text-gray-700"
                  href={"/news-spaziali-internazionali/"}
                  as={`/news-spaziali-internazionali/`}
                >
                  News Internazionali
                </Link>
                <Link
                  replace
                  href="/prime-fasi-riutilizzabili/10/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Prime Fasi Riutilizzabili
                </Link>
                <Link
                  replace
                  href="/blog/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Blog
                </Link>
                <a
                  href="#"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Guides
                </a>
                <Link
                  replace
                  href="/nasa-live/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  NASA Live
                </Link>
                <Link
                  replace
                  href="/progetti-di-ricerca-esopianeti/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Esopianeti
                </Link>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? 28 : 24}
        />
      )}
    </>
  );
};
