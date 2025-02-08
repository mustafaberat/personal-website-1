import React from "react";

import ThingsCard from "../components/ThingsCardComp";
import PasswordGenerator from "../components/PasswordGenerator";
import MyHead from "../components/MyHead";
import { projects } from "../data/projects";

const ProjectSection = ({ title, items }) => (
  <>
    <div className="things-titlediv">
      <h2 className="workexperience-title">{title}</h2>
    </div>
    <div className="things">
      {items.map((project, index) => (
        <ThingsCard
          key={index}
          text={project.title}
          imageSource={project.image}
          path={project.url}
        />
      ))}
      <div style={{ marginBottom: "20px" }}></div>
    </div>
  </>
);

const Things = () => {
  return (
    <div className="container">
      <MyHead />
      <h1 className="name-surname">Things</h1>
      
      <ProjectSection title="Websites" items={projects.websites} />
      <ProjectSection title="Games" items={projects.games} />
      
      <div className="things-titlediv">
        <h2 className="workexperience-title">Password Generator</h2>
      </div>
      <div>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default Things;
