import React from "react";
import "./academy-hero.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";

const AcademyHero = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-hero-section">
      <ComingSoon />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={4}
        slidesPerView={1}
        navigation
        className="academy-swiper"
      >
        <SwiperSlide className="academy-swiper-slide">
          <div className="academy-hero-container">
            <img
              src="../img/nika-sandro-single.jpg"
              alt="academy-hero"
              className="academy-hero-img"
            />
            <div className="academy-hero-text-box">
              <h1 className="academy-hero-heading">{t("nikaSandroName")}</h1>
              <h2 className="academy-hero-subheading">{t("nikaSandroDesc")}</h2>
              <Link to={"/digital-marketing"}>
                <button className="contact-btn-submit reg-btn">
                  {t("registration")}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="academy-swiper-slide">
          <div className="academy-hero-container">
            <img
              src="../img/singlemeta.png"
              alt="academy-hero"
              className="academy-hero-img single-meta-img"
            />
            <div className="academy-hero-text-box">
              <h1 className="academy-hero-heading">{t("metaBlueprint")}</h1>
              <h2 className="academy-hero-subheading">{t("metaBlueprint2")}</h2>
              <Link to={"/meta"}>
                <button className="contact-btn-submit reg-btn">
                  {t("registration")}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="academy-swiper-slide">
          <div className="academy-hero-container">
            <img
              src="../img/student.jpg"
              alt="academy-hero"
              className="academy-hero-img single-meta-img"
            />
            <div className="academy-hero-text-box">
              <h1 className="academy-hero-heading">{t("student")}</h1>
              <h2 className="academy-hero-subheading">{t("studentText")}</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AcademyHero;
