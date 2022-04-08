
import { SEO } from "@components/common";
import { useRouter } from "next/router";
import Image from 'next/image'


function PrimeFasi({ sta, pageNumber }) {
  const router = useRouter();
console.log(sta)
  return (
    <>
      <SEO
        description="Launchers and reusable cores"
        title="Launchers and reusable cores"
      />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="text-3xl font-bold text-yellow-600 font-display mb-6">
        Launchers and reusable cores
        </h1>
       {sta.count && <h3 className="text-2xl mb-6">There are {sta.count} results </h3>} 

        {sta.results ? sta.results?.map((lol) => {
          return (
            <article
              className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
              key={lol.id}
            >

              <Image
                className="mb-4 emma sm:h-full md:h-5/6 object-cover flex"
                src={lol.image_url}
                alt={lol.name}
       
                layout="raw"
              />


              <div className="sm:w-full md:w-2/3 px-4  py-6">
                <h1 className="text-3xl mb-4 font-bold text-yellow-600 font-display">
                  {lol.details}
                </h1>
                <div className="flex">
                  <b>Flights: &nbsp;</b>
                  <p>{lol.flights}</p>
                </div>
                <div className="flex mb-4">
                  <b>Status: &nbsp; </b>
                  <p>{lol.status}</p>
                </div>
                <span
                 
                  onClick={() =>
                    router
                      .push(`/single-reusable-core/${lol.id}`)
                      .then(() => window.scrollTo(0, 0))
                  }
                  className=" mt-4 px-3 cursor-pointer py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                  target="_blank"
                  rel="noopener noreferrer canonical"
                >
                 Find out more
                </span>
              </div>
            </article>
          );
        }) : <pre>{sta.detail}</pre>}
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
                  .push(`/reusable-cores/${pageNumber - 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous Page&nbsp;&nbsp;&nbsp;&nbsp;
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
                  .push(`/reusable-cores/${pageNumber + 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Next Page
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(pageContext) {
  const pageNumber = Number(pageContext.query.slug);

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launcher/?limit=30&offset=${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      sta: data,
      pageNumber,
    },
  };
}

export default PrimeFasi;
