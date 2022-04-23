import { SEO } from "@components/common";
import axios from "axios";
import Image from 'next/image'
import Link from "next/link"

function MarsNEws({ results }) {
   
   
    return (
        <>
            <SEO
                title="All about Mars"
                description="All news from NASA latest discoveries"
            />
            <div className="px-4 sm:px-6 max-w-screen-2xl md:flex ">
                <section className="w-full mt-8 md:max-w-screen-lg">
                    {results.title.map((item, index) => {
                        console.log(results.link[index].substring(21))
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
                                        href=  {`/mars-news${results.link[index].substring(26).trim()}`}
                                        rel="noopener noreferrer canonical"
                                    >
                                    Find out more
                                    </Link>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </div>
        </>
    );
}

export default MarsNEws;

export async function getStaticProps() {
    const { data } = await axios.get(
        "https://nassa.herokuapp.com/2");

    return {
        props: { results: data.results },
        revalidate: false, // rerun after 10 seconds
    };
}
