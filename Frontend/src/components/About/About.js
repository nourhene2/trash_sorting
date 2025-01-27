import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About RecycleApp</h1>
      <p>
        At RecycleApp, we believe in the power of technology to make our planet
        cleaner and greener. Our mission is to simplify waste management for
        everyone by leveraging artificial intelligence to help classify and
        recycle waste efficiently.
      </p>
      <p>
        Whether you're at home, at school, or at work, RecycleApp empowers you
        to make smarter recycling decisions and reduce your environmental
        footprint.
      </p>
      <h2>Our Mission</h2>
      <ul>
        <li>Encourage sustainable waste management practices.</li>
        <li>Educate communities about the importance of recycling.</li>
        <li>Leverage AI technology to promote efficient waste sorting.</li>
      </ul>
      <h2>Why Choose RecycleApp?</h2>
      <p>
        Recycling can be challenging, but it doesn't have to be. With our
        easy-to-use app, you can:
      </p>
      <ul>
        <li>Upload images of your waste for AI-based classification.</li>
        <li>Learn about different types of recyclable materials.</li>
        <li>Track your recycling habits and contribute to a greener future.</li>
      </ul>
    </div>
  );
};

export default About;
