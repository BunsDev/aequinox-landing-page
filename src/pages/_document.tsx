import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Aequinox</title>
          <meta property="og:title" content="Aequinox" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.aequinox.io" />
          <meta
            property="og:image"
            content="https://landing-page-beryl-two.vercel.app/aequinox-metaimage.jpeg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:description" content="" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
