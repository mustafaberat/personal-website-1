import styles from "../../styles/Education.module.css";
import { educationData } from "../../data/education";

export default function Education() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      {educationData.map((education) => (
        <div className={styles.card} key={education.school}>
          <div className={styles.cardHeader}>
            <div className={styles.schoolInfo}>
              <div>
                <h3 className={styles.degree}>{education.degree}</h3>
                <span className={styles.school}>{education.school}</span>
              </div>
            </div>
            <div className={styles.meta}>
              <span className={styles.date}>{education.date}</span>
              <span className={styles.location}>{education.location}</span>
            </div>
          </div>

          {education.achievements?.length > 0 && (
            <div className={styles.achievementsContainer}>
              {education.achievements.map((text) => (
                <span key={text} className={styles.techTag}>
                  <span className={styles.achievementIcon} aria-hidden="true">
                    <i className="fas fa-medal" />
                  </span>
                  {text}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
