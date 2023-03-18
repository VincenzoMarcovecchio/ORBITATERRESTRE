import { SEO } from "@components/common";
import axios from "axios";
import Link from "next/link"
import { Lanci } from "../../components/common/Lanci";

function MarsNEwsa() {

    return (
        <>
            <SEO
                cano="si"
                slug="climate-news"
                title="Climate Change: Vital Signs of the Planet"
                description="Vital Signs of the Planet: Global Climate Change and Global Warming. Current news and data streams about global warming and climate change from NASA."
            />
            <div className="px-4 max-w-screen-2xl md:flex ">
                <section className="w-full ">
                    
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


