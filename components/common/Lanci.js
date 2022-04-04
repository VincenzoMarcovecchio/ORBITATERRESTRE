import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { Countdown } from "../../utils/countdown";
import { fetcher } from "../../utils/fetcher";



export function Lanci() {
  const url =
    "https://mimmofranco.herokuapp.com/https://lldev.thespacedevs.com/2.2.0/launch/upcoming?limit=20";

  const { data, error } = useSWR(url, fetcher);

  return (
    <div className="md:px-4 flex flex-col mio">
      {data && data.results !== undefined ? (
        data.results
          .sort(function (a, b) {
            return (
              Number(new Date(a.window_start)) - Number(new Date(b.window_start))
            );
          })
          .map((la) => {
            return (
              <figure
                className="flex mb-8 flex-col justify-between max-w-72 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer w-full"
                style={{
                  backgroundImage: `url(${la.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                key={la.id}
              >
                <div className="flex justify-between items-center ml-4 pr-8">
                  <div className="bg-indigo-500 bg-opacity-95 text-grey-darker bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    <Countdown
                      timeTillDate={la.window_start}
                      timeFormat={"YYYY MM DD, h:mm a"}
                    />
                  </div>
                  <small className="bg-white bg-opacity-95 p-2 w-auto h-auto shadow flex flex-col-reverse text-center font-bold text-red-400 ">
                    {la.mission?.type || "non specificato"}
                  </small>
                </div>

                <figcaption className="bg-gray-50  shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                  <p>
                    <b>Agency:&nbsp;</b>
                    <Link
                      className=" z-20"
                      replace
                      href={`/space-agency/${la.launch_service_provider.id}/`}
                    >
                      <a>{la.launch_service_provider.name}</a>
                    </Link>
                  </p>
                  <p>
                    <b>Pad:&nbsp;</b>
                    <Link
                      replace
                      className="truncate text-gray-500 text-sm"
                      href={`/launch-pad-platforms/${la.pad.id}/`}
                    >
                      <a>{la.pad?.name}</a>
                    </Link>
                  </p>
                  <p>
                    <b>Mission Name:&nbsp;</b>
                    <Link
                      replace
                      className="truncate text-gray-500 text-sm"
                      href={`/space-launch-single/${la.id}`}
                    >
                      <a>{la.mission?.name}</a>
                    </Link>
                  </p>
                </figcaption>
              </figure>
            );
          })
      ) : (
        <b>{"supersonic loading..."}</b>
      )}
      <div>
        <Link
          as={`/space-launch`}
          href={`/space-launch/`}
          replace
        >
          <a>Find out more</a>
        </Link>
      </div>
    </div>
  );
}

///lancio-missione-spaziale/${la.slug}/
