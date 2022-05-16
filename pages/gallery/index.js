import React from "react";
import { Lanci } from "../../components/common/Lanci";
import { SEO } from "@components/common";


function Homea({ datas }) {

  
    return (
        <React.Fragment>

            <SEO cano="si"
                slug={`gallery`} 
                title="Space Gallery" 
                description="NASA Image and Video Library" />
             <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
                    <h2 className="text-4xl font-bold text-yellow-600 font-display mt-8 mx-auto mb-6">
                        NASA Picture galleries
                    </h2>
                    {datas.collection.items.map((ip) => {
                        return (
                            <article className=" pb-4 md:flex sm:flex-col md:flex-row max-w-full  mt-6 mb-8 shadow-lg rounded-lg overflow-hidden">
                            <figure className="p-4 mt-16 ">

                                <img
                                    className="mb-4 emma sm:h-full md:h-5/6 object-cover flex"
                                    src={ip.links[0].href}
                                    alt={ip.data[0].title}
                                    width={450}
                                    height={550}
                                />

                                <figcaption className>
                                    <p className="mb-2 mt-4">
                                        <strong className="font-extrabold">Title:&nbsp;</strong>
                                        {ip.data[0].title}
                                    </p>
                                    <p className="mb-2 ">
                                        <strong className="font-extrabold">Description:&nbsp;</strong>
                                        {ip.data[0].description}
                                    </p>

                                </figcaption>
                            </figure>
                            </article>
                        )

                    })}


       

            
            </div>

        </React.Fragment>
    );
}

export async function getStaticProps() {
    const resat = await fetch(
        `https://images-assets.nasa.gov/recent.json`,
        {
            headers: {
                Accept: "application/json, text/plain, */*",
                "User-Agent": "*",
            },
        }
    );
    const datas = await resat.json();

    return {
        props: {
            datas,
        },

    };
}

export default Homea;
