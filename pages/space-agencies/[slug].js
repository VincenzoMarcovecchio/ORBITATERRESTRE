import { useState } from "react";
import { SEO } from "@components/common";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";

function Page({ agenciesData, pageNumber }) {
  const router = useRouter();

  const [type, setType] = useState(1);

  const set = [
    "Governative",
    "Multinationals",
    "Commercials",
    "Educationals",
    "Privates",
    "Unknown",
  ]


  if (!agenciesData) {
    return <p> error </p>
  }


  return (
    <>
      <SEO    
        title="Space Agencies"
        description="A list of agencies involved with space missions"
      />
      <h1 className="text-4xl text-center mb-8 font-bold text-yellow-600 font-display mt-8 mx-auto ">
        Space agencies dataset
      </h1>
      <div className=" flex-wrap max-w-7xl mx-auto px-4 sm:px-6 display flex items-start">
                {set.map((se, index) => (
          <span
            className={`${type === index
              ? " underline flex-wrap border-yellow-200 m-1.5 cursor-pointer px-4  py-4 shadow-lg"
              : "m-1.5 flex-wrap cursor-pointer px-4  py-4 shadow-lg"
              }`}
            onClick={() => setType(index)}
          >
            {se}
          </span>
        ))}
      </div>
      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">

        {agenciesData && type === 0
          ? agenciesData.results
            .filter((agency) => agency.type === "Government")
            .map((data) => {
              return (
                <figure
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                  key={data.id}
                >
                  {data.image_url ? (
                    <Image
                      className="sm:w-full md:w-1/3 object-cover"

                      src={data.image_url}
                      alt={data.name}
                      width="350"
                      height="350"

                    />


                  ) : (
                    <img
                      className="sm:w-full md:w-1/3 object-cover"
                      src={`/immagine-non-trovata.png`}
                      alt={data.name}
                    />
                  )}

                  <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                    <h1 className="text-3xl font-bold text-yellow-600 font-display">
                      {data.name}
                    </h1>
                    <p className=" text-lg">
                      <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                    </p>
                    <p className=" text-lg ">
                      <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                    </p>
                    <p className=" text-lg">
                      <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                    </p>
                    <p className="mb-4 text-lg">
                      <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                    </p>
                    <Link
                      href={`/space-agency/${data.id}`}                  
                    >
                                          <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>

                    </Link>
                  </figcaption>
                </figure>
              );
            })
          : type === 1
            ? agenciesData.results
              .filter((agency) => agency.type === "Multinational")
              .map((data) => {
                return (
                  <figure
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                    key={data.id}
                  >
                    {data.image_url ? (
                      <Image
                        className="sm:w-full md:w-1/3 object-cover"

                        src={data.image_url}
                        alt={data.name}
                        width="350"
                        height="350"

                      />


                    ) : (
                      <img
                        className="sm:w-full md:w-1/3 object-cover"
                        src={`/immagine-non-trovata.png`}
                        alt={data.name}
                      />
                    )}

                    <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl font-bold text-yellow-600 font-display">
                        {data.name}
                      </h1>
                      <p className="mt-4 text-lg">
                        <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                      </p>
                      <p className=" text-lg ">
                        <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                      </p>
                      <p className="text-lg">
                        <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                      </p>
                      <p className="mb-4 text-lg">
                        <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                      </p>

                      <Link
                      href={`/space-agency/${data.id}`}                  
                    >
                      <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>
                    </Link>
                    </figcaption>
                  </figure>
                );
              })
            : type === 3
              ? agenciesData.results
                .filter((agency) => agency.type === "Educational")
                .map((data) => {
                  return (
                    <figure
                      className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                      key={data.id}
                    >
                      {data.image_url ? (
                        <Image
                          className="sm:w-full md:w-1/3 object-cover"

                          src={data.image_url}
                          alt={data.name}
                          width="350"
                          height="350"

                        />


                      ) : (
                        <img
                          className="sm:w-full md:w-1/3 object-cover"
                          src={`/immagine-non-trovata.png`}
                          alt={data.name}
                        />
                      )}

                      <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                        <h1 className="text-3xl font-bold text-yellow-600 font-display">
                          {data.name}
                        </h1>
                        <p className="mt-4 ">
                          <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                        </p>
                        <p className="">
                          <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                        </p>
                        <p>
                          <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                        </p>
                        <p className="mb-4">
                          <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                        </p>

                        <Link
                    href={`/space-agency/${data.id}`}
                  
                    >
                                       <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>

                    </Link>
                      </figcaption>
                    </figure>
                  );
                })
              : type === 4
                ? agenciesData.results
                  .filter((agency) => agency.type === "private")
                  .map((data) => {
                    return (
                      <>
                        {data.id && (
                          <figure
                            className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                            key={data.id}
                          >
                            {data.image_url ? (
                              <Image
                                className="sm:w-full md:w-1/3 object-cover"

                                src={data.image_url}
                                alt={data.name}
                                width="350"
                                height="350"

                              />


                            ) : (
                              <img
                                className="sm:w-full md:w-1/3 object-cover"
                                src={`/immagine-non-trovata.png`}
                                alt={data.name}
                              />
                            )}

                            <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                              <h1 className="text-3xl font-bold text-yellow-600 font-display">
                                {data.name}
                              </h1>
                              <p className="mt-4 ">
                                <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                              </p>
                              <p className="">
                                <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                              </p>
                              <p>
                                <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                              </p>
                              <p className="mb-4">
                                <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                              </p>

                              <Link
                    href={`/space-agency/${data.id}`}
                  
                    >
                      <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>
                    </Link>
                            </figcaption>
                          </figure>
                        )}
                      </>
                    );
                  })
                : type === 5
                  ? agenciesData.results
                    .filter((agency) => agency.type === "Unknown")
                    .map((data) => {
                      return (
                        <figure
                          className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                          key={data.id}
                        >
                          {data.image_url ? (
                            <Image
                              className="sm:w-full md:w-1/3 object-cover"

                              src={data.image_url}
                              alt={data.name}
                              width="350"
                              height="350"

                            />


                          ) : (
                            <img
                              className="sm:w-full md:w-1/3 object-cover"
                              src={`/immagine-non-trovata.png`}
                              alt={data.name}
                            />
                          )}

                          <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                            <h1 className="text-3xl font-bold text-yellow-600 font-display">
                              {data.name}
                            </h1>
                            <p className="mt-4 ">
                              <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                            </p>
                            <p className="">
                              <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                            </p>
                            <p>
                              <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                            </p>
                            <p className="mb-4">
                              <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                            </p>

                            <Link
                    href={`/space-agency/${data.id}`}
                  
                    >
                      <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>
                    </Link>
                          </figcaption>
                        </figure>
                      );
                    })
                  : agenciesData.results.map((data) => {
                    return (
                      <figure
                        className="sm:grid md:flex sm:flex-col md:flex-row max-w-full mb-12 shadow-lg rounded-lg overflow-hidden"
                        key={data.id}
                      >
                        {data.image_url ? (
                          <Image
                            className="sm:w-full md:w-1/3 object-cover"

                            src={data.image_url}
                            alt={data.name}
                            width="350"
                            height="350"
                         
                          />


                        ) : (
                          <img
                            className="sm:w-full md:w-1/3 object-cover"
                            src={`/immagine-non-trovata.png`}
                            alt={data.name}
                          />
                        )}
                        <figcaption className="sm:w-full md:w-2/3 px-4  py-6 ">
                          <h1 className="text-3xl font-bold text-yellow-600 font-display">
                            {data.name}
                          </h1>
                          <p className=" ">
                            <b className="font-extrabold">Administrator:</b>&nbsp;{data.amministrator}
                          </p>
                          <p>
                            <b className="font-extrabold">Founded:</b>&nbsp;{data.founding_year}
                          </p>
                          <p>
                            <b className="font-extrabold">Description:</b>&nbsp;{data.description}
                          </p>
                          <p className="mb-4">
                            <b className="font-extrabold">Type:</b>&nbsp;{data.type}
                          </p>

                          <Link
                      href={`/space-agency/${data.id}`}
                          >
                      <a  className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a>
                          </Link>
                        </figcaption>
                      </figure>
                    );
                  })}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex  items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              if (pageNumber > 10) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router
                  .push(`/space-agencies/${pageNumber - 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous page&nbsp;&nbsp;&nbsp;&nbsp;
          </div>

          <div>#{pageNumber}</div>

          <div
            className="cursor-pointer"
            onClick={() => {
              if (pageNumber < 200) {
                // As of the current version of Next.js the default behavior for router.push
                // will leave the scroll where it is, so we have to manually call scrollTo.
                // This however is being worked on and is fixed in canary.
                // Show this in tutorial vid:
                // https://github.com/vercel/next.js/issues/3249
                router
                  .push(`/space-agencies/${pageNumber + 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Next page
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.1.0/agencies/?limit=200&offset=${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      agenciesData: data,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Page;
