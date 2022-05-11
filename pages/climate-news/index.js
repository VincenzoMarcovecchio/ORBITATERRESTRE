import { SEO } from "@components/common";
import axios from "axios";
import Link from "next/link"
import { Lanci } from "../../components/common/Lanci";

function MarsNEwsa({ results }) {
console.log(results)

    return (
        <>
            <SEO
                cano="si"
                slug="climate-news"
                imageUrl={results.image[1]}
                title="Climate Change: Vital Signs of the Planet"
                description="Vital Signs of the Planet: Global Climate Change and Global Warming. Current news and data streams about global warming and climate change from NASA."
            />
            <div className="px-4 max-w-screen-2xl md:flex ">
                <section className="w-full ">
                    {results.title.map((item, index) => {
                    //    console.log(results.link[index].substring(21))
                        return (
                            <article className="sm:grid md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden"
                                key={index}>

                                <img
                                    className="sm:w-full md:w-1/3 object-cover"
                                    src={results.image[index]}
                                    alt={item}
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    layout=""
                                />
                                <div className="sm:w-full md:w-2/3 px-4  py-6 ">

                                    <h2 className="text-3xl font-bold text-yellow-600 font-display">

                                        {item}</h2>
                                    <p className="mt-2 text-lg mb-3">{results.description[index]}</p>


                                    <Link
                                        className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"

                                        href={`/climate-news/news${results.link[index].substring(29).trim()}`}
                                        rel="noopener noreferrer canonical"
                                    ><a href={`/climate-news/news${results.link[index].substring(29).trim()}`} className="px-3  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Find out more</a></Link>
                                </div>
                            </article>
                        )
                    })}
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

export default MarsNEwsa;

export async function getStaticProps() {
    const { data } = await axios.get(
        "https://nassa.herokuapp.com/climate");

    return {
        props: { results: data.results },
    };
}
