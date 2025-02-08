import React from "react";
import styles from "../../styles/Technologies.module.css";

const technologiesData = [
  {
    name: "Golang / C# / NodeJs / Java / Python",
    level: 100,
    category: "Programming Languages"
  },
  {
    name: "Elastic / Cassandra / MongoDB / PostgreSQL",
    level: 100,
    category: "Databases"
  },
  {
    name: "Kafka / RabbitMQ / K8S",
    level: 90,
    category: "Infrastructure"
  },
  {
    name: "CSS / React / Vue",
    level: 75,
    category: "Frontend"
  },
];

const Technologies = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.skillsGrid}>
        {technologiesData.map((tech, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <span className={styles.category}>{tech.category}</span>
              <span className={styles.percentage}>{tech.level}%</span>
            </div>
            <div className={styles.skillName}>{tech.name}</div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
