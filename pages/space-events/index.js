import { SEO } from "@components/common";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";
import { EventJsonLd } from 'next-seo';

function Eventit({ eventi }) {
  const router = useRouter();


  return (
    <>
      <SEO
        cano="si"
        slug="space-events"
        title="Space Events"
        imageUrl={eventi.results[0].feature_image}
        description="A list of future space events"
      />

      {eventi.results?.map((lol) => {
        <EventJsonLd
          name={lol.name}
          startDate={moment(lol.date).format("DD-MM-YYYY")}
          endDate={moment(lol.date).format("DD-MM-YYYY")}
          location={{
            name: `${lol.name}`,
            sameAs: `https://firststepintospace.com/space-events/${lol.slug}`,
            address: {
              streetAddress: `${lol.location}`,
              addressLocality: `${lol.location}`,
              addressRegion: `${lol.location}`,
              postalCode: `${lol.location}`,
              addressCountry: 'US',
            },
          }}
          url={`https://firststepintospace.com/space-events/${lol.slug}`}
          images={[`${lol.feature_image}`]}
          description={`${lol.description}`}
          offers={[

          ]}
          performers={[
            {
              name: `${lol.program[0]?.name}`,
            },
            {
              name: `${lol.program[0]?.name}`,
            },
          ]}
        />
      })}
      
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          Next Events
        </h1>
        <div>
          <div className=" max-w-7xl mx-auto  md:px-4 display flex flex-col items-start">
            {eventi.results ? (
              eventi.results?.map((lol) => {
                return (
                  <article
                    className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                    key={lol.id}
                  >
                    <img
                      className="sm:w-full md:w-1/3 object-cover"
                      src={lol.feature_image}
                      alt={lol.titile}
                      width={250}
                      height={250}
                      layout="responsive"
                    />

                    <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                      <h1 className="text-3xl mb-4 font-bold text-yellow-600 font-display">
                        {lol.name}
                      </h1>
                      <span className="px-3 mb-9 cursor-pointer py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        {moment(lol.date).format("DD-MM-YYYY")}
                      </span>
                      <p className="mt-4" >
                        <b className="font-extrabold">Location:&nbsp;</b>
                        {lol.location}
                      </p>
                      <p >
                        <b className="font-extrabold">Part of the program:&nbsp;</b>
                        {lol.program[0]?.name}
                      </p>
                      <p className="mb-4" >
                        <b className="font-extrabold">Description:&nbsp;</b>
                        {lol.description}
                      </p>
                      &nbsp;
                      <Link
                        href={`/space-events/${lol.slug}`}
                        target="_blank"
                        rel="noopener noreferrer canonical"
                      ><a className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a></Link>
                    </div>
                  </article>
                );
              })
            ) : (
              <pre>{eventi.detail}</pre>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getStaticProps() {


  const res = await fetch(`https://ll.thespacedevs.com/2.1.0/event/upcoming`);

  const news = await res.json();

  const eventi = news;

  // Pass data to the page via props

  return {
    props: {
      eventi,

    },
  };
}
export default Eventit;
