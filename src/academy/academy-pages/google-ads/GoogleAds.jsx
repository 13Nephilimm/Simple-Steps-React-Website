import React, { useState } from "react";
import SingleCourseTemp from "../../academy-comps/academy-single-course-temp/SingleCourseTemp";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import Footer from "../../../components/ReUsable/footer/Footer";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import "./google-ads.css";
import { useTranslation } from "react-i18next";

const GoogleAds = () => {
  const { t } = useTranslation();

  const [syllabus, setSyllabus] = useState([
    {
      name: "ლექცია 1",
      theme: (
        <ul>
          <li>- საძიებო სისტემები</li>
          <li>- საძიებო სისტემების შედეგების ტიპები/შედეგების გვერდი</li>
          <li>- რეკლამა და ორგანული შედეგები</li>
          <li>
            - ანალიტიკური ინსტრუმენტები/ google trends, search console, google
            analytics
          </li>
        </ul>
      ),
    },
    {
      name: "ლექცია 2",
      theme: (
        <ul>
          <li>- გუგლის სარეკლამო ანგარიშის შექმნა</li>
          <li>- გუგლის რეკლამის ტიპები</li>
          <li>- საძიებო სიტყვები და მათი მითითების პრინციპები</li>
          <li>- Search კამპანიები</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 3",
      theme: (
        <ul>
          <li>- გუგლის Search კამპანიის გამართვა</li>
          <li>- სარეკლამო ალგორითმის მუშაობის პრინციპები</li>
          <li>- ბიდინგის სტრატეგიები</li>
          <li>- ბიუჯეტირება</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 4",
      theme: (
        <ul>
          <li>- Youtube Ads</li>
          <li>- Youtube კამპანიების შექმნა და გაშვება</li>
          <li>- Youtube რეკლამის ტიპები</li>
          <li>- მთავარი მეტრიკები</li>
          <li>- სარეკლამო დეშბორდი</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 5",
      theme: (
        <ul>
          <li>- ანალიტიკის გამართვის მნიშვნელობა</li>
          <li>- Google tag Manager-ის ჩასმა საიტზე</li>
          <li>- ანალიტიკსის დაკავშირება</li>
          <li>- კონვერსიების შექმნა</li>
          <li>- კონვერსიებზე ორიენტირებული კამპანიები Google-ში</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 6",
      theme: (
        <ul>
          <li>- Display რეკლამა</li>
          <li>- Ad Extensions</li>
          <li>- Smart კამპანიები</li>
          <li>- რეპორტინგი</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 7",
      theme: (
        <ul>
          <li>- Crawl, Index, Rank</li>
          <li>- საძიებო სისტემები</li>
          <li>- საიტის ტექნიკური SEO-ს აუდიტის ჩატარება</li>
          <li>
            - ტექნიკური აუდიტის შედეგები - კითხვა, საკითხების პრიორიტეტიზაცია
          </li>
          <li>- საიტის სიჩქარის ოპტიმიზაცია</li>
          <li>- Core Web Vitals</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 8",
      theme: (
        <ul>
          <li>- საძიებო სიტყვების კლვევა</li>
          <li>- კონკურენტების კვლევა</li>
          <li>- სტრატეგიული ქივორდების შერჩევა</li>
          <li>- სტრატეგიული ქივორდების ოპტიმიზაცია კონტენტში</li>
          <li>- On-Page Seo პარამეტრების ოპტიმიზაცია</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 9",
      theme: (
        <ul>
          <li>- საიტის რუკა</li>
          <li>- Robot txt ფაილის და Robot tags ოპტიმიზაცია</li>
          <li>- URL-ების ოპტიმიზაცია</li>
          <li>- ადგილობრივი SEO/ Local SEO</li>
          <li>
            - Google Search Console-ის საბაზისო მეტრიკებისა და რეპორტების კითხვა
          </li>
          <li>- SEO ოპტიმიზებული ბლოგები</li>
        </ul>
      ),
    },
    {
      name: "ლექცია 10",
      theme: (
        <ul>
          <li>- Link-building</li>
          <li>- Off-Page SEO</li>
          <li>- Seo პლაგინებში მუშაობის ძირითადი პრინციპები WordPress-ზე</li>
          <li>- როგორ უნდა განვსაზღვროთ KPI-ს სეო სამუშაოებისთვის</li>
        </ul>
      ),
    },
  ]);

  return (
    <div>
      <AcademyHeader />
      <SingleCourseTemp
        syllabus={syllabus}
        courseName={"Google Ads"}
        lecturer1={t("tiko")}
        duration1={`3 ${t("weeks")}`}
        duration2={`10 ${t("lecture")}`}
        schedule1={t("noOffline")}
        schedule3={t("tikoTime")}
        schedule4={"(19:30)"}
        places={t("tikoPlace")}
        price={t("tikoPrice")}
        img={"../img/tiko.jpg"}
      />
      <InfiniteSlider />
      <Footer />
    </div>
  );
};

export default GoogleAds;
