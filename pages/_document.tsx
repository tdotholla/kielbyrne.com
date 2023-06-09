import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { chakraTheme } from "../chakra-theme";
import Navbar from "@/components/Navbar";

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
