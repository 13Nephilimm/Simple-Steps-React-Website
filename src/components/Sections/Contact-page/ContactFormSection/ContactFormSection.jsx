import React, { useRef } from "react";
import "./contact-form-section.css";
import emailjs from "@emailjs/browser";

const ContactFormSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8zt2isk",
        "template_ndlwmyk",
        form.current,
        "gH8qKAh8bRqFXP99s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="section contact-form-section">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          className="contact-name"
          type="name"
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          className="contact-mobile"
          type="number"
          name="mobile"
          placeholder="Mobile Number"
          required
        />
        <input
          className="contact-email"
          type="email"
          name="email"
          placeholder="E-Mail"
          required
        />
        <input
          className="contact-company"
          type="name"
          name="company"
          placeholder="Company Name"
          required
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Message"
          className="contact-message"
          required
        ></textarea>
        <button type="submit" className="contact-btn-submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
