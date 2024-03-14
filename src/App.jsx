import React from "react";
import Nabar from "./components/nabar/Nabar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testi from "./components/Testi/Testi";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Nabar />
      <Hero />

      <div className="container">
        <Title subTitle="Our Recommendation" title="Century High" />
        <Programs />
        <About />
        <Title subTitle="other good champion as Yasuo" title="no one" />
        <Campus />
        <Title subTitle="this is" title="Elon Mark" />
        <Testi />
        <Title subTitle="if you fucking dare" title="Debate me" />
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
