import React, { useRef, useState } from "react";
import "./contact-form-section.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactFormSection = ({ formId }) => {
  const { t } = useTranslation();
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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
          setIsSuccess(true);
          setIsError(false);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setIsError(true);
        }
      );

    e.target.reset();
  };

  return (
    <section className="section contact-form-section">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="formId" value={formId} />
        <input
          className="contact-name"
          type="name"
          name="name"
          placeholder={t("fullName")}
          required
        />
        <input
          className="contact-mobile"
          type="number"
          name="mobile"
          placeholder={t("mobileNumber")}
          required
        />
        <input
          className="contact-email"
          type="email"
          name="email"
          placeholder={t("email")}
        />
        <input
          className="contact-company"
          type="name"
          name="company"
          placeholder={t("companyName")}
        />
        <textarea
          name="message"
          rows="7"
          placeholder={t("message")}
          className="contact-message"
        ></textarea>
        <button type="submit" className="contact-btn-submit">
          {t("send")}
        </button>
      </form>
      {isSuccess && <p className="success-message">{t("successMessage")}</p>}
      {isError && <p className="error-message">{t("errorMessage")}</p>}
      <p className="contact-span">
        {t("contactSpan1")} <br /> {t("contactSpan2")}
      </p>
    </section>
  );
};

export default ContactFormSection;
