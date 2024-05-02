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
              src="../img/course-hero.png"
              alt="academy-hero"
              className="academy-hero-img"
            />
            <div className="academy-hero-text-box">
              <h1 className="academy-hero-heading">
                {t("firstTime")} <br /> {t("inGeorgia")}
              </h1>
              <h2 className="academy-hero-subheading">
                {t("metaCertification")}
              </h2>
              <Link>
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
              src="../img/course-hero.png"
              alt="academy-hero"
              className="academy-hero-img"
            />
            <div className="academy-hero-text-box">
              <h1 className="academy-hero-heading">
                {t("firstTime")} <br /> {t("inGeorgia")}
              </h1>
              <h2 className="academy-hero-subheading">
                {t("metaCertification")}
              </h2>
              <Link>
                <button className="contact-btn-submit reg-btn">
                  {t("registration")}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AcademyHero;
