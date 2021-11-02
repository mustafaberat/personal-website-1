import React from "react";

const Technologies = () => {
  return (
    <div className="container">
      <h1 className="name-surname">Resume</h1>
      <div className="technologies-container">
        <h1 className="technologies-title">Technologies</h1>

        <div className="technologies-point">Java / C# / Golang</div>

        <div className="technologies-lvl">
          <div className="technologies-lvl-in100"></div>
        </div>

        <div className="technologies-point">
          Elastic / Cassandra / PostgreSQL
        </div>

        <div className="technologies-lvl">
          <div className="technologies-lvl-in100"></div>
        </div>

        <div className="technologies-point">Nifi / Kafka / K8S</div>

        <div className="technologies-lvl">
          <div className="technologies-lvl-in80"></div>
        </div>

        <div className="technologies-point">Python / C++ / PHP</div>

        <div className="technologies-lvl">
          <div className="technologies-lvl-in75"></div>
        </div>

        <div className="technologies-point">JS / React / Vue</div>
        <div className="technologies-lvl">
          <div className="technologies-lvl-in75"></div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
