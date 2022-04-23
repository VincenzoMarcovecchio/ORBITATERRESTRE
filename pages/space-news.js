import { Lanci } from "../components/common/Lanci";
import { SEO } from "../components/common/Seo";


function News({ newsdata }) {
  return (
    <>
      <SEO
        cano="si"
        slug="space-news"
        title="International Space News "
        description="International Space News from different web sources"
      />
      <div className="px-4 max-w-screen-2xl md:flex ">
        <section className="w-full ">
          {newsdata ? (
            newsdata.map((lol) => {
              return (
                <article
                  className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                  key={lol.id}
                >
                  <img
                    className="sm:w-full md:w-1/3 object-cover"
                    src={lol.imageUrl}
                    alt={lol.titile}
                    width={350}
                    height={350} 
                    layout="responsive"
                  />


                  <div className="sm:w-full md:w-2/3 px-4  py-6 ">
                    <h1 className="text-3xl font-bold text-yellow-600 font-display">
                      {lol.title}
                    </h1>
                    <p className="mt-2 text-lg mb-3">{lol.summary}</p>

                    <a
                      className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      href={lol.url}
                      target="_blank"
                      rel="noopener noreferrer canonical"
                    >
                      Go to source
                    </a>
                  </div>
                </article>
              );
            })
          ) : (
            <p>supersonic loading...</p>
          )}
        </section>
        <hr />
        <section className="flex">
          <aside>
            <h2 className="text-4xl md:px-4 font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
              Next Launches
            </h2>
            <Lanci />
          </aside>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");

  const news = await res.json();

  const newsdata = news;

  // Pass data to the page via props

  return {
    props: {
      newsdata,
    },
  };
}

export default News;
