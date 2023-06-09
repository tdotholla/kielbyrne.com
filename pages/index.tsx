import Navbar from "@/components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kiel H. Byrne</title>
        <meta
          name="description"
          content="Personal Webpage for Kiel Hamilton Byrne"
        />
      </Head>
      <Navbar />
      <LandingPageTemplate />
    </>
  );
};

export default Index;
