import React from "react";
import "./about.css";
import "../home/home.css";

import img from "../../../public/me.jpg";

import reactImg from "./images/React.png";
import cssImg from "./images/css.png";
import muiImg from "./images/mui.png";
import jsImg from "./images/js.png";
import tailwindImg from "./images/tailwind.png";

const socialLinks = {
  github: "https://github.com/abdullahi-abdiaziz",
  "linkedin-square": "https://linkedin.com/in/abdullahi-abdiaziz-yusuf",
  twitter: "https://twitter.com/eng_kawte",
  instagram: "https://instagram.com/abdallah_abdiaziz",
};

const skillImages = {
  react: reactImg,
  css: cssImg,
  mui: muiImg,
  js: jsImg,
  tailwind: tailwindImg,
};

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profiles">
        <div className="about-me flex">
          <div className="icons flex">
            {Object.entries(socialLinks).map(([key, value]) => (
              <a
                key={key}
                className={`icon icon-${key}`}
                href={value}
                target="_blank"
              ></a>
            ))}
          </div>
        </div>
        <p className="flex">
          <span className="icon-mail-envelope-closed"></span>
          Aboodyfor2024@gmail.com
        </p>
      </div>
      <div>
        <div>
          <section className="about flex">
            <img src={img} alt="" />
            <div>
              <h3>Who Am I?</h3>
              <p>
                I am Abdullahi Abdiaziz, a dedicated Frontend Developer with a
                strong passion for crafting engaging and user-friendly
                experiences on the web. My journey in the world of coding
                started with a keen interest in creating visually appealing and
                functional websites.
              </p>
            </div>
          </section>
          <div className="about flex">
            <section>
              <h3>What I Do</h3>
              <p>
                As a frontend developer, my primary focus is on building Single
                Page Applications (SPAs) using JavaScript and the React library.
                I specialize in creating responsive and attractive user
                interfaces that seamlessly adapt to different devices, providing
                users with a delightful experience.
              </p>
            </section>

            <section>
              <h3>Skills & Expertise</h3>
              <ul className="skill-lists">
                {Object.entries(skillImages).map(([key, value]) => (
                  <li key={key}>
                    <img className="skill" src={value} alt={key} />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
