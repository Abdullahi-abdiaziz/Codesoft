import React from "react";
import "../home/home.css";
import "./contact.css";

const socialLinks = {
  github: "https://github.com/abdullahi-abdiaziz",
  linkedin: "https://linkedin.com/in/abdullahi-abdiaziz-yusuf",
  twitter: "https://twitter.com/eng_kawte",
  instagram: "https://instagram.com/abdallah_abdiaziz",
};

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrapper contact__wrapper bottom-border">
        <div className="contact__text">
          <div className="contact__head">
            <span className="icon icon-mail-envelope-closed"></span>
            <h2 className="contact__headline">Contact</h2>
          </div>
          <p class="contact__description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
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
          </div>
        </div>
        <form action="mailto@aboodyfor2024@gmail.com" className="contact__form">
          <div className="contact__control">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <img
              src="./assets/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <img
              src="./assets/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
            <img
              src="./assets/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control align-right">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
