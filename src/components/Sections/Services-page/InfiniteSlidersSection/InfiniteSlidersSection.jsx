import React from "react";
import "./infinite-sliders-section.css";
import InfiniteSlider from "../../../../components/ReUsable/infinite-slider/InfiniteSlider";

const InfiniteSlidersSection = () => {
  return (
    <section className="infinite-sliders-sections">
      <InfiniteSlider
        backgroundColor={"#0000fe"}
        textColor={"#fff"}
        rotation={6.95}
        position={"absolute"}
        top={"95%"}
        left={"50%"}
        translate={"-50%"}
        width={"150%"}
        thickness={"50px"}
      />
      <InfiniteSlider
        backgroundColor={"#0000fe"}
        textColor={"#fff"}
        rotation={351}
        position={"absolute"}
        top={"-220%"}
        left={"50%"}
        translate={"-50%"}
        width={"150%"}
        thickness={"50px"}
      />
    </section>
  );
};

export default InfiniteSlidersSection;
