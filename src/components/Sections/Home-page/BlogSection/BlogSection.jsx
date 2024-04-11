import React, { useEffect, useState } from "react";
import "./blog-section.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const { t } = useTranslation();

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setSlidesPerView(1);
      } else if (screenWidth < 1100) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();

    const handleResize = () => {
      updateSlidesPerView();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section blog-section">
      <h2 className="blogs-heading">{t("blogsHeading")}</h2>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={4}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="./img/blog-test.png"
              alt="blog-thumbnail"
              className="swiper-img"
            />
            <h2 className="blog-heading">{t("singleBlogHeading")}</h2>
          </SwiperSlide>
          <p className="invisible">See more</p>
        </Swiper>
        <p className="see-more">{t("seeMore")}</p>
      </div>
    </section>
  );
};

export default BlogSection;
