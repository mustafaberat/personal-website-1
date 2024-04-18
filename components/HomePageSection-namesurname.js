import React from "react";

import SocialMedia from "../components/SocialMedia";
import MailForHomePage from "../components/MailForHomePage";

const HomePageSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
        <p className="my-title">Senior Software Engineer at <span className="my-title-company">Getir</span></p>
        <SocialMedia />
        <MailForHomePage />
      </div>
    </section>
  );
};

export default HomePageSection;
