
import { SEO } from "@components/common";


function Primala({ sta }) {


  return (
    <>
      <SEO
        description="We monitor the early stages of the rocket when a launch vehicle can be used more than once such as the Falcon 9 cores used by SpaceX"
        title="Reusable launchers"
      />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <h1 className="text-4xl text-center mb-8 font-bold text-yellow-600 font-display mt-8 mx-auto ">
          {sta.launcher_config.full_name}
        </h1>
        <figure className="flex flex-col">
          <Image
            className="sm:w-full md:w-1/3 object-cover"
            src={sta.image_url}
            alt={sta.status}
            width="350"
            height="350"
            layout="intrinsic"
          />

          <figcaption>

            <p className="mt-14">
              <b className="font-extrabold">Fi;ghts:&nbsp;</b>
              {sta.flights}
            </p>
            <p className="">
              <b className="font-extrabold">Status:&nbsp;</b>
              {sta.status}
            </p>
            <p className="">
              <b className="font-extrabold">Succesfull Landings:&nbsp;</b>
              {sta.succesfull_landings || "nessun risultato"}
            </p>
            <p>
              <b >Launcher configs:</b>
            </p>
            <p >
              <b className="font-extrabold">Name:&nbsp;</b>
              {sta.launcher_config.full_name}
            </p>
            <p>
              <b className="font-extrabold">Description:&nbsp;</b>
              {sta.launcher_config.description}
            </p>
            <p>
              <b className="font-extrabold">Total launches:&nbsp;</b>
              {sta.launcher_config.total_launch_count}
            </p>
            <p>
              <b className="font-extrabold">Succesfull launches:&nbsp;</b>

              {sta.launcher_config.succesfull_launches || "nothing"}

            </p>
          </figcaption>

        </figure>
      </div>
    </>
  );
}

export async function getServerSideProps(pageContext) {
  const pageNumber = Number(pageContext.query.slug);

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/launcher/${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      sta: data,
      pageNumber,
    },
  };
}

export default Primala;
