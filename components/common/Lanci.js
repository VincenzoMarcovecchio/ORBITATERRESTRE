import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { Countdown } from "../../utils/countdown";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/router";

export function Lanci() {
  const url = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/";

  const { data, error } = useSWR(url, fetcher);
  const router = useRouter();
  return (
    <div className="md:px-4 flex flex-col mio">
      {data ? (
        data.results?.map((la) => {
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
                    timeTillDate={la.window_end}
                    timeFormat={"YYYY MM DD, h:mm a"}
                  />
                </div>
                <small className="bg-white bg-opacity-95 p-2 w-auto h-auto shadow flex flex-col-reverse text-center font-bold text-red-400 ">
                  {la.mission?.type || "non specificato"}
                </small>
              </div>

              <figcaption className="bg-white bg-opacity-85  shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <p>
                  <b>Agenzia:&nbsp;</b>

                  <span
                    className="z-20"
                    onClick={() =>
                      router
                        .push(
                          `/agenzia-spaziale/${la.launch_service_provider.id}/`
                        )
                        .then(() => window.scrollTo(0, 0))
                    }
                  >
                    <a>{la.launch_service_provider.name}</a>
                  </span>
                </p>
                <p>
                  <b>Dove:&nbsp;</b>

                  <span
                    className="z-20"
                    onClick={() =>
                      router
                        .push(`/piattaforma-lancio-pad/${la.pad.id}/`)
                        .then(() => window.scrollTo(0, 0))
                    }
                  >
                    <a>{la.pad.name}</a>
                  </span>
                </p>
                <p>
                  <b>Nome Missione:&nbsp;</b>

                  <span
                    className="z-20"
                    onClick={() =>
                      router
                        .push(`/lancio-missione-spaziale/${la.slug}/`)
                        .then(() => window.scrollTo(0, 0))
                    }
                  >
                    <a>{la.mission?.name}</a>
                  </span>
                </p>
              </figcaption>
            </figure>
          );
        })
      ) : (
        <b>{"caricamento supersonico in corso..."}</b>
      )}
      <div>
        <Link
          as={`/lanci-missioni-spaziali`}
          href={`/lanci-missioni-spaziali/`}
          replace
        >
          <a>Scopri di piú sui lanci</a>
        </Link>
      </div>
    </div>
  );
}
