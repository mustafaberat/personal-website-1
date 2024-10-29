import React from "react";

const workExperiences = [
  {
    title: "Senior Back End Developer",
    company: "Getir",
    date: "22/02/24 - Present",
    location: "Istanbul, Turkey",
    details: [
      "Responsible for maintaining and rewriting microservices within the Market Order Checkout and Basket Funnel, managing the entire process from basket creation to order delivery. Key responsibilities include stock checking, product updates, promotions, courier management, listing updates, and client interactions.",
      "Technologies utilized: Golang, Node.js, MongoDB, Kafka, RabbitMQ, Amazon SQS, AWS Lambda, and Redis.",
    ],
  },
  {
    title: "Instructor",
    company: "Turkish Technology Team",
    date: "06/02/19 - Present",
    location: "Istanbul, Turkey",
    details: [
      "Conducted lessons every Sunday, covering various topics including Energy Technology, Internet of Things, Artificial Intelligence, Mobile Application Development, and Programming, with each course lasting over four months.",
    ],
  },
  {
    title: "Back End Developer",
    company: "Trendyol Group",
    date: "14/09/21 - 01/01/24",
    location: "Istanbul, Turkey",
    details: [
      "Contributed to the TDESK Project (tdesk.trendyol.com), a platform enabling Trendyol and its stakeholders to track all tickets before and after an order.",
      "Technologies employed: Golang, .NET Core 3.1, C# 8, Java Spring Boot, Microservices architecture, Event-driven Architecture, Cassandra, Elasticsearch, PostgreSQL, Apache Nifi, Redis, GitLab CI, Kubernetes, Kafka, Python, Docker, React.js, and SCSS.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Baykar Defense",
    date: "13/07/20 - 09/06/21",
    location: "Istanbul, Turkey",
    details: [],
  },
  {
    title: "Full Stack & React Native Developer",
    company: "TUBITAK BILGEM Software Technologies Research Institute",
    date: "17/06/19 - 09/08/19",
    location: "Ankara, Turkey",
    details: [
      "Developed Facebook login and registration pages for a hybrid React Native application compatible with both mobile and web platforms. Additionally, created an application that dynamically requested official websites, retrieved their response codes, and stored the results in a database.",
      "Technologies used: Java, Spring Framework for back-end and testing; JavaScript, React, and React Native for front-end; PostgreSQL for database management.",
    ],
  },
  {
    title: "Website Manager",
    company: "IZU Career Center",
    date: "10/09/17 - 07/06/19",
    location: "Istanbul, Turkey",
    details: [
      "In a part-time role, I was responsible for updating content and making necessary changes to the official website of the institution.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Inlab Smart Technologies",
    date: "20/08/18 - 16/09/18",
    location: "Istanbul, Turkey",
    details: [
      "Completed my first internship, where I was tasked with converting design mockups into functional web pages using HTML and CSS.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="container">
      <section className="workexperience-container">
        <h1 className="workexperience-title">Work Experience</h1>
      </section>

      {workExperiences.map((experience, index) => (
        <section className="workexperience-container" key={index}>
          <h3 className="work-title">{experience.title}</h3>
          <div className="work-subtitles">
            <h3 className="work-company">{experience.company}</h3>
            <div className="work-dateandlocation">
              <h3 className="work-date">{experience.date}</h3>
              <h3 className="work-location">{experience.location}</h3>
            </div>
          </div>
          {experience.details.map((detail, i) => (
            <p className="work-details" key={i}>
              {detail}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default WorkExperience;
