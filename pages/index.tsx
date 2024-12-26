// pages/index.tsx
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
// Import other sections as you build them

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kiel Byrne | Home</title>
        <meta
          name="description"
          content="Innovating Solutions, Building Communities, Empowering Change."
        />
      </Head>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        {/*
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
        <Footer /> */}
      </main>
    </>
  );
};

export default Home;
