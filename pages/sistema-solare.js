import {  SEO } from "@components/common";

 function Come() {
  return (
    <>
      <SEO
        title="Il tuo vicinato galattico"
        description="Questa vista simulata del nostro sistema solare funziona su dati reali. Le posizioni dei pianeti, delle lune e dei veicoli spaziali vengono mostrate dove si trovano in questo momento. Questo orrery digitale è una versione leggera e ottimizzata per i dispositivi mobili del software Eyes della NASA."
      />

      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <iframe
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="w-full min-h-screen flex mb-4"
          width="420"
          height="515"
          src="https://eyes.nasa.gov/apps/orrery/#/home"
          alt="Il sistema solare"
        ></iframe>
      </div>
      </>
  );
}
export default Come