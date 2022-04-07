import { SEO } from "@components/common";
import Image from 'next/image'

function Slugt({ curiosity, pageNumber }) {
  return (
    <>
      <SEO cano="si"
        slug={pageNumber}
        title={`${curiosity.results[0]?.name}`}
        description={curiosity.results[0]?.description}
      />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">
          {curiosity.results[0]?.name}
        </h1>
        <Image
          className="mb-8"
          src={curiosity.results[0]?.feature_image}
          alt={curiosity.results[0]?.name}
          width={350}
          height={350}
          layout="responsive"
        />

        <p className="mt-4">
          <b className="font-extrabold">Descriptions:</b>&nbsp;{curiosity.results[0]?.description}
        </p>
        <p >
          <b className="font-extrabold">An event of type:</b>&nbsp;{curiosity.results[0]?.type.name}
        </p>
        <p >
          <b className="font-extrabold">Location:</b>&nbsp;{curiosity.results[0]?.location}
        </p>
        <p >
          <b className="font-extrabold">Space stations:</b>&nbsp;{curiosity.results[0]?.spacestations[0]?.name}
        </p>
        {curiosity.results[0]?.video_url ? (
         <div class="w-full flex"> <iframe className="mt-4" width="560" height="315" src={curiosity.results[0]?.video_url.replace("watch","embed")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div> ) : (
          "Video not found"
        )}
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.slug;
  const res = await fetch(
    `https://ll.thespacedevs.com/2.1.0/event/?slug=${pageNumber}`
  );

  const news = await res.json();

  const curiosity = news;

  // Pass data to the page via props

  return {
    props: {
      curiosity,
      pageNumber
    },
  };
}
export default Slugt;
