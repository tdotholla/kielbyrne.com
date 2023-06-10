import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { chakraTheme } from "../chakra-theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head title="Kiel H. Byrne">
          <meta
            name="description"
            content="Personal Webpage for Kiel Hamilton Byrne"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
