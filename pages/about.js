import React from "react";
import HeaderComp from "../components/headerComponent";
import AboutPageSection from "../components/AboutMePageSection-history";
import styles from "../styles/About.module.css";
const About = () => (
  <div className={styles.container}>
    <HeaderComp />
    <AboutPageSection />
  </div>
);

export default About;
