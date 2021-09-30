import { SEO } from "@components/common";

function OrbitaBassas() {
  return (
    <>
      <SEO
        title="Telescopi e metodi di riconoscimento "
        description="Telescopi e metodi di individuazione"
      />
      <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
        <section className="w-full mt-8 md:max-w-screen-lg">
          <iframe
            className="w-full"
            id="iss"
            width="625"
            height="575"
            src="https://platform.leolabs.space/visualizations/leo"
          />
        </section>
      </div>
    </>
  );
}

export default OrbitaBassas;
