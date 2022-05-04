
import { SEO } from "@components/common";
import Image from 'next/image'


function Primala({ sta, pageNumber }) {
console.log(sta)

  return (
    <>
      <SEO
      cano="si"
      slug={`single-reusable-core/${pageNumber}`}
        description="We monitor the early stages of the rocket when a launch vehicle can be used more than once such as the Falcon 9 cores used by SpaceX"
        title="Reusable launchers"
        imageUrl={sta.image_url ? sta.image_url : ""}
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
              <b className="font-extrabold">Flights:&nbsp;</b>
              {sta.flights}
            </p>
            <p className="">
              <b className="font-extrabold">Status:&nbsp;</b>
              {sta.status}
            </p>
            <p className="">
              <b className="font-extrabold">Succesfull Landings:&nbsp;</b>
              {sta.succesfull_landings || "no results"}
            </p>
            <hr />
            <h2 className="mt-8 mb-8 text-4xl font-bold text-yellow-600 font-display">Configuration
            </h2>
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
              <b className="font-extrabold">Consecutive Succesful launches:&nbsp;</b>

              {sta.launcher_config.consecutive_successful_launches || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">GTO capacity:&nbsp;</b>

              {sta.launcher_config.gto_capacity || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Family:&nbsp;</b>

              {sta.launcher_config.family || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Diameter:&nbsp;</b>

              {sta.launcher_config.diameter || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Apogee:&nbsp;</b>

              {sta.launcher_config.apogee || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Maiden flight:&nbsp;</b>

              {sta.launcher_config.maiden_flight || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Launch cost:&nbsp;</b>

              {sta.launcher_config.launch_cost || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Launch mass:&nbsp;</b>

              {sta.launcher_config.launch_mass || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Length:&nbsp;</b>

              {sta.launcher_config.length || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Serial number:&nbsp;</b>

              {sta.serial_number || "nothing"}

            </p>
            <p>
              <b className="font-extrabold">Info url:&nbsp;</b>

             <a href={sta.launcher_config.info_url} target="_blank" rel="canonical noopener noreferrer">{sta.launcher_config.info_url || "nothing"}</a> 

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
