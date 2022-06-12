import { SEO } from "@components/common";
import axios from "axios";
import Link from "next/link"
import { Lanci } from "../../components/common/Lanci";

function MarsNEws() {

    return (
        <>
        <h1>NAMMELO</h1>
        </>
    )}
            {/* <SEO
                title="National Aeronautics and Space Administration"
                description="NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the future in space exploration, scientific discovery and aeronautics research."
            />
            <div className="px-4 max-w-screen-2xl md:flex ">
                <section className="w-full ">
                    {results.title.map((item, index) => {
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
                                        href={`/nasa-news/${results.link[index].substring(26).trim()}`}
                                        rel="noopener noreferrer canonical"
                                    >
                                        Find out more
                                    </Link>
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

export default MarsNEws;

export async function getStaticProps() {
    const { data } = await axios.get(
        "https://nassa.herokuapp.com/svs");

    return {
        props: { results: data.results }
      
    };
} */}
