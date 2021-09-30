import dynamic from 'next/dynamic'
const SEO = dynamic(() => import('../components/common/Seo'))

function Eventiqq() {
  return (
   <>
      <SEO
        title="Eveneventi terrestri naturali che stanno accadendo"
        description="Utilizzando applicazioni client, come la Worldview di NASA EOSDIS, gli utenti possono navigare quotidianamente in tutto il mondo e cercare eventi naturali nel momento in cui si verificano. Tempeste sono regolarmente avvistate ai tropici, tempeste di sabbia sui deserti, incendi boschivi in ​​estate. Questi eventi si verificano costantemente e le immagini NRT della NASA possono rappresentarli tutti utilizzando una varietà di parametri di dati diversi. Tuttavia, l'esperienza dell'utente è personalizzata, e quindi limitata, dall'applicazione client. E se esistesse un'API che fornisse un elenco curato di eventi naturali e fornisse un modo per collegare tali eventi a livelli di immagine NRT correlati agli eventi? Entra EONET."
      />
      <iframe
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="w-full min-h-screen flex mb-4"
        width="420"
        height="515"
        src="https://worldview.earthdata.nasa.gov/"
        alt="NASA"
      ></iframe>
      <div className=" max-w-7xl mx-auto  px-4 sm:px-6 sm:px-6 display flex flex-col items-start"></div>
    </>
  );
}

export default Eventiqq;
