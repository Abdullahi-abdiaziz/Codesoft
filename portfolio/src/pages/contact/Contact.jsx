import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="wrapper contact__wrapper bottom-border">
        <div class="contact__text">
          <div className="contact__head">
            <span className="icon icon-mail-envelope-closed"></span>
            <h2 className="contact__headline">Contact</h2>
          </div>
          <p class="contact__description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form action="" class="contact__form">
          <div class="contact__control">
            <label for="name" class="visually-hidden">
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
              class="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div class="contact__control">
            <label for="email" class="visually-hidden">
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
              class="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div class="contact__control">
            <label for="message" class="visually-hidden">
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
              class="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div class="contact__control align-right">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
