import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {

    const eventio = await fetch('https://spazex.herokuapp.com/tutto')

    const postListo = await eventio.json()

    return getServerSideSitemap(ctx, postListo.link.map((capsule) => ({
        loc: `https://www.orbitaterrestre.com/space-x/${capsule.substring(42)}`,
        lastmod: new Date().toISOString(),
        changefreq: `hourly`,
        priority: 0.8

    })));

};


export default function Sitemap() { }