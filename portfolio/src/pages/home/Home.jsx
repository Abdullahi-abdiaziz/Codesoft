import React from "react";
import "./home.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/hero.json";

const socialLinks = {
  github: "https://github.com/abdullahi-abdiaziz",
  linkedin: "https://linkedin.com/in/abdullahi-abdiaziz-yusuf",
  twitter: "https://twitter.com/eng_kawte",
  instagram: "https://instagram.com/abdallah_abdiaziz",
};

const Home = () => {
  return (
    <section id="about" className="hero flex">
      <div className="heroText">
        <div className="heroAvatar flex">
          <img src="./image.png" className="avatar" alt="" />
          <div className="icon-verified verified"></div>
        </div>
        <h1 className="title">
          Frontend Developer, Programmer, and Self Learner
        </h1>
        <p className="subtitle">
          I'm Abdullahi Abdiaziz, A frontend Developer espicially JavaScript and
          it's library React, I make Responsive Atractive Single Page
          Applications (SPAs);
        </p>
        <div className="about-me flex">
          <div className="icons flex">
            <a
              className="icon icon-twitter"
              href={socialLinks.twitter}
              target="_blank"
            ></a>
            <a
              className="icon icon-instagram"
              href={socialLinks.instagram}
              target="_blank"
            ></a>
            <a
              className="icon icon-github"
              href={socialLinks.github}
              target="_blank"
            ></a>
            <a
              className="icon icon-linkedin-square"
              href={socialLinks.linkedin}
              target="_blank"
            ></a>
          </div>
          <div className="resume">
            <a href="#resume-https">Get Resume</a>
          </div>
        </div>
      </div>
      <div className="heroImage animation">
        <Lottie style={{ width: 340 }} animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Home;
