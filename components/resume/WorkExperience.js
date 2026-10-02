import Image from "next/image";
import styles from "../../styles/WorkExperience.module.css";
import { workExperiences } from "../../data/work";

export default function WorkExperience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Work Experience</h2>

      {workExperiences.map((experience) => (
        <div className={styles.timelineItem} key={`${experience.company}-${experience.date}`}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.companyInfo}>
                {experience.companyLogo && (
                  <div className={styles.logoContainer}>
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.company} logo`}
                      width={40}
                      height={40}
                      className={styles.logo}
                    />
                  </div>
                )}
                <div>
                  <h3 className={styles.jobTitle}>{experience.title}</h3>
                  <span className={styles.company}>{experience.company}</span>
                </div>
              </div>
              <div className={styles.meta}>
                <span className={styles.date}>{experience.date}</span>
                <span className={styles.location}>{experience.location}</span>
              </div>
            </div>

            {experience.details?.length > 0 && (
              <div className={styles.details}>
                {experience.details.map((detail) => (
                  <p key={detail} className={styles.detail}>
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {experience.technologies && (
              <div className={styles.technologies}>
                {experience.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
