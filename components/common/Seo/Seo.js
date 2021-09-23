import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, imageUrl, slug, cano, description }) {
  const siteMetadata = getSiteMetaData();
  const metaDescription = description || siteMetadata.description;
  const sluga = slug || undefined;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <link
        rel="canonical"
        href={`${
          imageUrl && cano
            ? `https://orbitaterrestre.com/${sluga}`
            : imageUrl && !cano
            ? `https://orbitaterrestre.com/post/${sluga}`
            : `https://orbitaterrestre.com/`
        }`}
      />
      <meta
        property="og:image"
        content={`${
          imageUrl
            ? `https://orbitaterrestre.com/${imageUrl}`
            : imageUrl && imageUrl.includes("apod.nasa.gov")
            ? `${imageUrl}`
            : `https://orbitaterrestre.com/`
        }`}
      />

      <meta property="og:site_name" content="Orbita Terrestre"></meta>
      <meta
        property="og:url"
        content={`${
          imageUrl && cano
            ? `https://orbitaterrestre.com/${sluga}`
            : imageUrl && !cano
            ? `https://orbitaterrestre.com/post/${sluga}`
            : `https://orbitaterrestre.com/`
        }`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta
        name="twitter:image"
        content={`${
          imageUrl
            ? `https://orbitaterrestre.com/${imageUrl}`
            : imageUrl && imageUrl.includes("apod.nasa.gov")
            ? `${imageUrl}`
            : `https://orbitaterrestre.com/`
        }`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={metaDescription}></meta>

      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="static/favicon-16x16.png"
      />
      <meta property="fb:app_id" content="256677285815818" />
    </Head>
  );
}
