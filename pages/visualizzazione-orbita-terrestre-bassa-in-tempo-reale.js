import { SEO } from "@components/common";
import { Lanci } from "../components/common/Lanci";
function OrbitaBassas() {
  return (
    <>
      <SEO
        cano="si"
        imageUrl="visualizzazione-orbita-terrestre-bassa-in-tempo-reale.png"
        title="Visualizzazione orbita terrestre bassa"
        slug="visualizzazione-orbita-terrestre-bassa-in-tempo-reale"
        description="Questa visualizzazione dell'orbita terrestre bassa (LEOV) è di proprietà di LeoLabs, Inc. Il LEOV può essere utilizzato (inclusa la riproduzione di video e immagini LEOV) per scopi educativi, accademici o di ricerca non commerciali o per pubblicazioni di notizie e scopi giornalistici simili. In tali usi, è necessario attribuire credito a LeoLabs, incluso un collegamento al sito Web di LeoLabs all'indirizzo https://leolabs.space e il nome di LeoLabs e altri indizi di proprietà non possono essere rimossi o oscurati. LeoLabs si riserva il diritto di revocare tale autorizzazione qualora LeoLabs determini che l'uso non è conforme a quanto sopra o potrebbe esporre LeoLabs o altri a rischio di danni. Il LEOV è reso disponibile così com'è e senza garanzia, esplicita o implicita, inclusa l'accuratezza, e l'uso è a rischio esclusivo dell'utente. LeoLabs si riserva tutti i diritti sul LEOV."
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full md:max-w-screen-lg">
          <figure className="">
            <iframe
              className="w-full flex mb-4 mt-8"
              width="420"
              height="515"
              src="http://stuffin.space/"
            ></iframe>

            <figcaption>
              <p className="mb-2">
                <strong className="font-extrabold">&nbsp;</strong>
              </p>
            </figcaption>
          </figure>
        </section>

        <hr />
        <section className="flex">
          <aside>
            <h3 className="text-4xl text-center font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Prossimi Lanci
            </h3>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
  );
}

export default OrbitaBassas;
