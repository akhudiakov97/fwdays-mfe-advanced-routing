import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-container">
      <Link to="/">Home</Link>
      <h2>About Us</h2>
      <p>
        Welcome to our app! We're a passionate team dedicated to building
        innovative solutions.
      </p>
    </div>
  );
};

export default About;
