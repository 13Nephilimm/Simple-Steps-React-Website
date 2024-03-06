import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/coming-soon/ComingSoon";
import InfiniteSlider from "../../components/infinite-slider/InfiniteSlider";
import Footer from "../../components/footer/Footer";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <>
      <section className="section contact-section">
        <Navbar />
        <ComingSoon />
        <div className="page-shape">
          <div className="video-shape-box">
            <video
              src="./img/contact-shape.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <h1 className="contact-heading-1">
            Send us your data <br /> Our team will contact you
          </h1>
        </div>
      </section>
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
      <section className="section introduce-section">
        <h2 className="introduce-heading">Introduce us to your business</h2>
        <h2 className="introduce-sub-heading">
          The services we offer will strengthen your position in the digital
          world, make you more competitive <br /> and help you position your
          brand correctly.
        </h2>
        <div className="introduce-categories-container">
          <button className="btn-introduce">
            Creating a marketing strategy
          </button>
          <button className="btn-introduce">
            Management of social networks
          </button>
          <button className="btn-introduce">Content creation</button>
          <button className="btn-introduce">Photo/Video</button>
          <button className="btn-introduce">branding</button>
          <button className="btn-introduce">web-development</button>
        </div>
      </section>
      <InfiniteSlider />
      <Footer />
    </>
  );
};

export default Contact;
