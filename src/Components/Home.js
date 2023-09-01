import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import YoungStarsMission from "./YoungStarsMission";
import TechnicalDevelopment from "./TechnicalDevelopment";
import MentalDevelopment from "./MentalDevelopment";
import Testimonials from "./Testimonials";
import Teachers from "./Teachers";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Language from "./Language";
import Footer2 from "./Footer2";


export default function Home() {
  return (
    <div>
      <Header />
      <Language />
      <HeroSection />
      <Services />
      <YoungStarsMission />
      <TechnicalDevelopment />
      <MentalDevelopment />
      <Testimonials />
      <Teachers />
      <FAQ />
      <Footer />
      <Footer2 />
    </div>
  );
}
