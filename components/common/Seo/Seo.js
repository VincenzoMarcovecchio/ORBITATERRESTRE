import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title,imageUrl, description = "" }) {

  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:image" content={imageUrl}/>
      <meta property="og:site_name" content="Orbita Terrestre"></meta>
      <meta property="og:url" content="https://orbitaterrestre.com"></meta>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:image" content={imageUrl}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image:alt" content={metaDescription}></meta>
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
    </Head>
  );
}
