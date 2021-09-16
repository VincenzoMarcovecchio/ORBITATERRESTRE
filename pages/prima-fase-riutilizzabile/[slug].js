import  React from "react";
import { LayoutComponent, SEO } from "@components/common";


function PrimeFasi({ sta }) {
 

  return (
    <LayoutComponent>
      <SEO
        description="Monitoriamo le prime fasi del razzo quando un veicolo di lancio può essere utilizzato più di una volta come i core Falcon 9 utilizzati da SpaceX"
        title="Lanciatori e prime fasi riutilizzabili"
      />

      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            className="sm:w-full md:w-1/3 object-cover"
            src={sta.image_url}
            alt={sta.status}
          />

          <div className="sm:w-full md:w-2/3 px-4  py-6">
            {/* <h1 className="text-3xl font-bold text-yellow-600 font-display">
              {lol.details}
            </h1> */}
            <div className="flex">
              <b>Voli:&nbsp;</b>
              <p>{sta.flights}</p>
            </div>
            <div className="flex">
              <b>Status:&nbsp;</b>
              <p>{sta.status}</p>
            </div>
            <div className="flex">
              <b>Atterraggi riusciti:&nbsp;</b>
              <p>{sta.succesfull_landings || "nessun risultato"}</p>
            </div>
            <div>
              <b>Configurazioni Lanciatore:</b>
            </div>
            <div className="flex">
              <p>Nome:&nbsp;</p>
              <p>{sta.launcher_config.full_name}</p>
            </div>
            <div className="flex">
              <p>Descrizione:&nbsp;</p>
              <p>{sta.launcher_config.description}</p>
            </div>
            <div className="flex">
              <p>Lanci Totali:&nbsp;</p>
              <p>{sta.launcher_config.total_launch_count}</p>
            </div>
            <div className="flex">
              <p>Lanci Avvenuti Con Successo:&nbsp;</p>
              <p>
                {sta.launcher_config.succesfull_launches || "niente al momento"}
              </p>
            </div>
          </div>
        </article>
      </div>
    </LayoutComponent>
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

export default PrimeFasi;
