import React, { useState } from "react";
import "./single-course.css";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";
import ContactFormSection from "../../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import { useTranslation } from "react-i18next";

const SingleCourseTemp = ({
  syllabus,
  courseName,
  lecturer1,
  lecturer2,
  duration1,
  duration2,
  schedule1,
  schedule2,
  schedule3,
  schedule4,
  places,
  price,
  img,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <ComingSoon />
      <section className="single-course-hero">
        <h1 className="single-course-main-heading">{courseName}</h1>
      </section>
      <section className="course-details-section">
        <div className="course-details-container">
          <div className="course-content-box">
            <img src={img} alt="mentors" className="mentors-image" />
            <p>
              <b>{t("lecturers")}</b>
            </p>
            <p>{lecturer1}</p>
            <p>{lecturer2}</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/period.svg"
              alt="period"
              className="single-course-icons"
            />

            <p>
              <b>{t("period")}</b>
            </p>
            <p>{t("soon")}</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/calendar.svg"
              alt="calendar"
              className="single-course-icons"
            />
            <p>
              <b>{t("duration")}</b>
            </p>
            <p>{duration1}</p>
            <p>{duration2}</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/watch.svg"
              alt="watch"
              className="single-course-icons"
            />
            <p>
              <b>{t("schedule")} (offline)</b>
            </p>
            <p className="text-align-center">
              {schedule1} <br /> {schedule2}
            </p>
            <p>
              <b>{t("schedule")} (online)</b>
            </p>
            <p className="text-align-center">
              {schedule3} <br /> {schedule4}
            </p>
          </div>
          <div className="course-content-box">
            <p className="text-align-center">{places}</p>
          </div>
          <div className="course-content-box">
            <p>{price}</p>
          </div>
        </div>
      </section>
      <section className="helper-section">
        <ContactFormSection />
      </section>
      <section className="syllabus">
        <div className="syllabus-container">
          <h2 className="syllabus-heading">{t("courseSyllabus")}</h2>
          {syllabus.map((t) => {
            return (
              <div className="lecture-box">
                <h2 className="subject">{t.name}</h2>
                <p className="theme">{t.theme}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="course-details-section">
        <div className="course-details-container">
          <div className="course-content-box">
            <img src={img} alt="mentors" className="mentors-image" />
            <p>
              <b>ლექტორები</b>
            </p>
            <p>{lecturer1}</p>
            <p>{lecturer2}</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/period.svg"
              alt="period"
              className="single-course-icons"
            />

            <p>
              <b>პერიოდი</b>
            </p>
            <p>მალე...</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/calendar.svg"
              alt="calendar"
              className="single-course-icons"
            />
            <p>
              <b>ხანგრძლივობა</b>
            </p>
            <p>{duration1}</p>
            <p>{duration2}</p>
          </div>
          <div className="course-content-box">
            <img
              src="../img/watch.svg"
              alt="watch"
              className="single-course-icons"
            />
            <p>
              <b>განრიგი (offline)</b>
            </p>
            <p className="text-align-center">
              {schedule1} <br /> {schedule2}
            </p>
            <p>
              <b>განრიგი (online)</b>
            </p>
            <p className="text-align-center">
              {schedule3} <br /> {schedule4}
            </p>
          </div>
          <div className="course-content-box">
            <p className="text-align-center">{places}</p>
          </div>
          <div className="course-content-box">
            <p>{price}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCourseTemp;
