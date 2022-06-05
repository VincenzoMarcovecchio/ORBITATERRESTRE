import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {

    const eventio = await fetch('https://nassa.herokuapp.com/2')

    const postListo = await eventio.json()

    return getServerSideSitemap(ctx, postListo.results.link.map((capsule) => ({
        loc: `https://www.firststepintospace.com/news-on-mars/news${capsule.substring(26).trim()}`,
        lastmod: new Date().toISOString(),
        changefreq: `hourly`,
        priority: 0.8

    })));

};


export default function Sitemap() { }