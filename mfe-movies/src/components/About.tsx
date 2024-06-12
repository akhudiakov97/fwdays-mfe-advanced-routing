import { Link } from "@tanstack/react-router";
import "./About.css";

export function About() {
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
}

export default About;
