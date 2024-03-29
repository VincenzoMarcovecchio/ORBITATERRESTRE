
import {  SEO } from "@components/common";

function StazioneSpaziale({ sta }) {
  return (
    <>
      <SEO title={`${sta.name}`} description={`${sta.description}`} />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6"></h1>
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            className="sm:w-full md:w-1/3 object-cover"
            src={sta.image_url}
            alt={sta.name}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6 ">
            <h1 className="text-3xl font-bold text-yellow-600 font-display">
              {sta.name}
            </h1>
            <div className="flex">
              <b>People on board:&nbsp;</b>
              <p>{sta.onboard_crew}</p>
            </div>
            <div className="flex">
              <b>Type:&nbsp;</b>
              <p>{sta.type.name}</p>
            </div>
            <div className="flex">
              <b>Height:&nbsp;</b>
              <p>
                {sta.height}
                &nbsp;Meters
              </p>
            </div>
            <div className="flex">
              <b>Volume:&nbsp;</b>
              <p>
                {sta.volume}
                &nbsp;Mass
              </p>
            </div>
            <div className="flex">
              <b>Length:&nbsp;</b>
              <p>
                {sta.width}
                &nbsp;Meters
              </p>
            </div>
            <div className="flex">
              <b>Founded:&nbsp;</b>
              <p>{sta.founded}</p>
            </div>
            <div className="flex flex-col">
             
              <b>Description:&nbsp;</b>
              <p>{sta.description}</p>
            </div>
          </div>
        </article>
        <div className="flex flex-wrap">
          {sta.owners.map((lol) => {
            return (
              <span
                className="bg-red-500 m-2 p-4 text-white hover:bg-red-700 "
                key={lol.abbrev}
              >
                {lol.name}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.0.0/spacestation/${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      sta: data,
    },
  };
}

export default StazioneSpaziale;
