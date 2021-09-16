import Link from "next/link";
import { LayoutComponent, SEO } from "@components/common";
import { useRouter } from "next/router";
import nontrovata from "../../content/assets/immagine-non-trovata.png";
import { Lanci } from "../../components/common/Lanci";

function Piattaforme({ pad, pageNumber }) {
  const router = useRouter();
  return (
    <LayoutComponent>
      <SEO title="Piattaforme di lancio" />
      <div className="px-4  max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <h2 className="text-4xl font-bold text-yellow-600 font-display mx-auto mb-6">
            Piattaforme di lancio
          </h2>
          {pad.results ? (
            pad.results.map((pa) => {
              return (
                <article className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
                  <img src={pa.map_image || nontrovata} alt={pa.name} />
                  <h1 className="text-3xl font-bold text-yellow-600 font-display mb-2 mt-6">
                    {pa.name}
                  </h1>
                  <h2>Totale lanci effetuati:&nbsp;{pa.total_launch_count}</h2>
                  <h2>Latitudine:&nbsp;{pa.latitude}</h2>
                  <h2>Longitudine:&nbsp;{pa.longitude}</h2>

                  <Link replace href={`/piattaforma-lancio-pad/${pa.id}`}>
                    Leggi di più
                  </Link>
                </article>
              );
            })
          ) : (
            <pre>{pad.detail}</pre>
          )}
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
                  .push(`/piattaforme-lancio-pad/${pageNumber - 10}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Pagina Precedente&nbsp;&nbsp;&nbsp;&nbsp;
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
                  .push(`/piattaforme-lancio-pad/${pageNumber + 10}/`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Pagina Successiva
          </div>
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </LayoutComponent>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponse = await fetch(
    `https://ll.thespacedevs.com/2.2.0/pad?limit=10&offset=${pageNumber}`
  );

  const data = await apiResponse.json();

  return {
    props: {
      pad: data,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Piattaforme;
