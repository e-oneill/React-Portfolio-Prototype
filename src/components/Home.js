import React from "react";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home_container">
      <Jumbotron />
      <Projects />
    </div>
  );
};

export default Home;
