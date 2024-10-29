import React from "react";

const technologiesData = [
  {
    name: "Golang / C# / NodeJs / Java / Python",
    levelClass: "technologies-lvl-in100",
  },
  {
    name: "Elastic / Cassandra / MongoDB / PostgreSQL",
    levelClass: "technologies-lvl-in100",
  },
  {
    name: "Kafka / RabbitMQ / K8S",
    levelClass: "technologies-lvl-in90",
  },
  {
    name: "CSS / React / Vue",
    levelClass: "technologies-lvl-in75",
  },
];

const Technologies = () => {
  return (
    <div className="container">
      <h1 className="name-surname">Resume</h1>
      <div className="technologies-container">
        <h1 className="technologies-title">Technologies</h1>
        {technologiesData.map((tech, index) => (
          <div key={index}>
            <div className="technologies-point">{tech.name}</div>
            <div className="technologies-lvl">
              <div className={tech.levelClass}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
