import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import useOnclickOutside from "react-cool-onclickoutside";

 const NavBar = () => {
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
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"} as={`/`}>
              <div className="flex ">
                <img
                  style={{ marginLeft: "-0.6rem" }}
                  className="cursor-pointer  h-16"
                  src={`/transfinale.webp`}
                  alt="astronauta nello spazio"
                />
                <span style={{ marginLeft: "-0.5rem" }} className="font-md mt-4 flex flex-col cursor-pointer uppercase font-bold font-black leading-none font-display">
                  <p
                    className="font-black leading-none font-display
                     font-md uppercase font-bold"
                  >
                    orbita
                  </p>{" "}
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
            <div className="relative flex">
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
                    ? " z-20 opacity-100  translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "  translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
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
                        ? " z-20 relative grid gap-6 bg-white dark:bg-gray-700 flyer-container px-5 py-6 sm:gap-8 sm:p-8"
                        : "hidden "
                    }
                  >
                    <a
                      onClick={() => setOpen(!open)}
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
                      href="/visualizzazione-orbita-terrestre-bassa-in-tempo-reale/"
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
                            Programmi ufficiali NASA attivi nel 2021
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
                  <div className="px-5 py-5 bg-gray-50 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
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

            <div className="relative flex">
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
                    ? " z-20 opacity-100  translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "  translate-y-1  absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div
                  className={
                    flyerTwo
                      ? "z-20 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      : "hidden opacity-0 "
                  }
                >
                  <div className="relative bg-white dark:bg-gray-700 grid gap-6 flyer-container  dark:bg-yellow px-5 py-6 sm:gap-8 sm:p-8">
                    <div className="-m-3 p-3 dark:bg-gray-700 flex items-start rounded-lg hover:bg-gray-50">
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
                            Eventi futuri che riguardano l'esplorazione spaziale
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
                  <div className="px-5 py-5 bg-gray-50 dark:bg-gray-700 sm:px-8 sm:py-8">
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
                            replace
                            href="/piattaforme-lancio-pad/"
                            as="/piattaforme-lancio-pad/"
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
            <div className="relative items-center flex">
              <Link href={"/blog"} as={`/blog`}>
                Blog
              </Link>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
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
              ? "block z-20  opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0  scale-0 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div
            className={
              "bg-white  dark:bg-gray-700 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 flyer-container dark:bg-yellow divide-y-2 divide-gray-50"
            }
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    style={{ height: "4.1rem",left:"8px",top:"17px" }}
                    className="cursor-pointer absolute top-14 left-8  h-12 w-auto md:h-14"
                    src={`/transfinale.webp
                    `}
                    alt="astronauta nello spazio"
                  />
                </div>
                <div>
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
                <nav onClick={() => setOpen(!open)} className="grid gap-y-8">
                  <Link
                    onClick={() => setOpen(!open)}
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
                    onClick={() => setOpen(!open)}
                    replace
                    href="/nuove-scoperte-su-marte/3000/"
                    as="/nuove-scoperte-su-marte/3000"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
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
                    </svg>
                    <Link
                      onClick={() => setOpen(!open)}
                      replace
                      href="/astronauti/"
                      as="/astronauti/"
                    >
                      <span className="ml-3 text-base font-medium ">
                        Astronauti
                      </span>
                    </Link>
                  </a>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 ">
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
                    <Link
                      onClick={() => setOpen(!open)}
                      replace
                      href={"/blog/"}
                      as={`/blog`}
                    >
                      <span className="ml-3 text-base font-medium ">Blog</span>
                    </Link>
                  </a>
                  <a
                    onClick={() => setOpen(!open)}
                    href="/lanci-missioni-spaziali"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                    <span className="ml-3 text-base font-medium ">
                      Lanci prossimi
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div  onClick={() => setOpen(!open)} className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/piattaforme-lancio-pad/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Piattaforme
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  className="text-base font-medium  hover:text-gray-700"
                  href={"/news-spaziali-internazionali/"}
                  as={`/news-spaziali-internazionali/`}
                >
                  News Internazionali
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/prime-fasi-riutilizzabili/10/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Prime Fasi Riutilizzabili
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/satelliti-di-passaggio/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Satelliti sulla mia testa
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/quante-persone-ci-sono-nello-spazio-in-questo-momento/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  Persone nello spazio
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/posizione-dell-ISS-in-tempo-reale/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  ISS Live
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
                  replace
                  href="/nasa-live/"
                  className="text-base font-medium  hover:text-gray-700"
                >
                  NASA Live
                </Link>
                <Link
                  onClick={() => setOpen(!open)}
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
export default NavBar