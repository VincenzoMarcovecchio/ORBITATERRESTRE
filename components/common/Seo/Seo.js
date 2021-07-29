import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, imageUrl, description }) {
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
      <link
        rel="canonical"
        href={`${
          imageUrl
            ? `https://orbitaterrestre.com/post/${imageUrl}`
            : `https://orbitaterrestre.com/`
        }`}
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Orbita Terrestre"></meta>
      <meta
        property="og:url"
        content={`${
          imageUrl
            ? `https://orbitaterrestre.com/post/${imageUrl}`
            : `https://orbitaterrestre.com/`
        }`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={metaDescription}></meta>
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-185731147-1"
      />
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v11.0&appId=167048748417291&autoLogAppEvents=1"
        nonce="MZFmb3rK"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-185731147-1');
        `,
        }}
      />
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
    </Head>
  );
}
