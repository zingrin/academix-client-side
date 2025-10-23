import React from "react";
import StudentFeedback from "../components/StudentFeedback";
import Achievements from "../components/Achievements";
import Courses from "../components/Courses";
import MyPopularCourses from "../components/MyPopularCourses";
import InstructorCarousel from "../components/InstructorCarousel";
import BannerSlider from "../components/Slider";
import { Helmet } from "react-helmet-async";
import Features from "./Features";
import Services from "./Services";
import SkillsSection from "../components/SkillsSection";
import SpecialOffers from "../components/SpecialOffersSlider";
import CareerAccelerators from "../components/CareerAccelerators";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Academix</title>
      </Helmet>

      <div>
        <BannerSlider></BannerSlider>
        <SkillsSection></SkillsSection>
        <Courses></Courses>
        <MyPopularCourses></MyPopularCourses>
        <SpecialOffers></SpecialOffers>
        <CareerAccelerators></CareerAccelerators>
        <InstructorCarousel></InstructorCarousel>

        <Features></Features>
        <Services></Services>
        <StudentFeedback></StudentFeedback>
        <Achievements></Achievements>
      </div>
    </>
  );
};

export default Home;
