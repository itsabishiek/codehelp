import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-route">
        <a href="/box-shadow-generator">Box Shadow Generator</a>
      </div>
      <div className="home-route">
        <a href="/glassmorphism-generator">Glassmorphism Generator</a>
      </div>
      <div className="home-route">
        <a href="/gradient-generator">Gradient Generator</a>
      </div>
    </div>
  );
};

export default Home;
