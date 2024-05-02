import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const AcademyFooter = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8zt2isk",
        "template_0c2y3fm",
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

    e.target.reset();
  };

  return (
    <footer>
      <div className="footer-upper-container">
        <div className="location-box">
          <h2 className="location-heading">{t("location")}</h2>
          <a
            href="https://maps.app.goo.gl/ALsS4bGRbpMCSiLw6"
            target="_blank"
            className="location-paragraph"
          >
            {t("locationStreet")}
          </a>
        </div>
        <div className="contact-box">
          <h2 className="contact-heading">{t("contact")}</h2>
          <a
            href="mailto:academy@simplesteps.ge"
            target="_blank"
            className="contact-paragraph"
          >
            academy@simplesteps.ge
          </a>
          <a href="tel:+995-514-999-555" className="contact-paragraph">
            +995 514 999 555
          </a>
        </div>
        <form className="input-box" ref={form} onSubmit={sendEmail}>
          <input
            className="footer-email"
            type="email"
            name="email"
            placeholder={t("yourEmail")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("yourMessage")}
            className="footer-message"
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            {t("send")}
          </button>
        </form>
      </div>
      <div className="footer-lower-container">
        <div className="footer-logo-box">
          <img src="./img/footer-logo.png" alt="logo" />
        </div>
        <div className="copyright-box">
          <p>
            &copy; 2024 <br /> by Simple Steps
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;
