import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Video from "../../components/Video/Video";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Video />
      <Pricing />
    </div>
  );
};

export default Home;
