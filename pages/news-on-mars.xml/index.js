import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {

    const eventio = await fetch('https://nassa.herokuapp.com/2')

    const postListo = await eventio.json()

    return getServerSideSitemap(ctx, postListo.link.map((capsule) => ({
        loc: `https://www.orbitaterrestre.com/news-on-mars${capsule}`,
        lastmod: new Date().toISOString(),
        changefreq: `hourly`,
        priority: 0.8

    })));

};


export default function Sitemap() { }