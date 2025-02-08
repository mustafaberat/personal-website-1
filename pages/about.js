import React from "react";
import HeaderComp from "../components/headerComponent";
import AboutMePageSectionHistory from "../components/AboutMePageSection-history";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <HeaderComp />
      <main className={styles.main}>
        <AboutMePageSectionHistory />
      </main>
    </div>
  );
};

export default About;
