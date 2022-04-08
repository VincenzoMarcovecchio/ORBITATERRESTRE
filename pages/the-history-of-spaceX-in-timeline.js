import {  SEO } from "@components/common";
import moment from "moment";

function SpaceXTimeline({data}) {
   return (
    <>
      <SEO
        cano="si"
        imageUrl="la-storia-di-spaceX-in-timeline-component.png"
        slug="the-history-of-space-x-in-a-timeline-component"
        title="Space X history in a timeline "
        description="Have you ever wondered how spaceX..."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-5 md:p-10 h-full">
              <div className="border-2-2 md:left-2/4 absolute border-opacity-20 border-gray-700 h-full border"></div>
              {data ? (
                data.map((res, index) => {
                  return (
                    <div
                      key={res.title}
                      className={`mb-8 flex justify-between ${
                        index % 2 == 0 && "md:flex-row-reverse md:left-timeline"
                      }items-center w-full md:right-timeline`}
                    >
                      <div className="md:order-1 md:w-5/12"></div>
                      <div className="p-4 ml-2 md:p-0  flex items-center justify-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="flex items-center justify-center md:m-0 md:mx-auto font-semibold text-lg text-white">
                          {index}
                        </h1>
                      </div>
                      <div
                        className={`order-1 ${
                          index % 2 == 0 ? "bg-red-400" : "bg-gray-400"
                        }  rounded-lg shadow-xl md:w-5/12 px-6 py-4`}
                      >
                        <h3
                          className={`mb-3 font-bold ${
                            index % 2 == 0 ? "text-white" : "text-gray-800"
                          }  text-xl`}
                        >
                          {res.title}
                        </h3>
                        <time datetime={res.event_date_utc}>
                          {moment(res.event_date_utc).format("YYYY-MM-DD")}
                        </time>

                        <p className="text-sm mt-4 font-medium mb-4 leading-snug tracking-wide text-white text-opacity-100">
                          {res.details}
                        </p>

                        <a
                          href={res.links.article}
                          target="_blank"
                          rel="canonical noopener noreferrer"
                          className="text-sm rounded-full py-1 px-2  mt-8 bg-gray-50 leading-snug tracking-wide font-white leading-none font-display  text-sm color-white"
                        >
                          Find out more
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>supersonic loading...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SpaceXTimeline;

export async function getStaticProps() {
  const res = await fetch("https://api.spacexdata.com/v4/history");

  const news = await res.json();

  const data = news;

  // Pass data to the page via props

  return {
    props: {
      data,
    },
  };
}

