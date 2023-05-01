import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import Articles from "../../Components/Articles/Articles";
import Gallery from "../../Components/Gallery/Gallery";
import Features from "../../Components/Features/Features";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TeamMembers from "../../Components/TeamMembers/TeamMembers";
import Services from "../../Components/Services/Services";
import Skills from "../../Components/Skills/Skills";
import WorkSteps from "../../Components/WorkSteps/WorkSteps";
import Events from "../../Components/Events/Events";
import Pricing from "../../Components/Pricing/Pricing";
import Videos from "../../Components/Videos/Videos";
import Stats from "../../Components/Stats/Stats";
import Discount from "../../Components/Discount/Discount";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMembers />
      <Services />
      <Skills />
      <WorkSteps />
      <Events />
      <Pricing />
      <Videos />
      <Stats />
      <Discount />
      <Footer />
    </>
  );
}

export default Home;
