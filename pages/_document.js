import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head></Head>
        <body className="bg-gray-50">
          <Main />
          <NextScript />
          <script
        class="3758abc"
       
        src="https://github.com/kevin-powell/Mars-Weather-App/blob/master/scripts/index.js"
        data-encoded="1234sdkljfeiASD9A"></script>
        </body>

   
      </Html>
    );
  }
}
