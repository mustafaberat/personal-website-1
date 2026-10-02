import Image from "next/image";
import styles from "../styles/About.module.css";
import { timelineData } from "../data/about";
import { SITE_NAME } from "../data/site";

export default function AboutTimeline() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headerSection}>
        <div className={styles.profileInfo}>
          <Image
            src="/img/my-photo.jpeg"
            alt="Profile Photo"
            width={120}
            height={120}
            className={styles.profileImage}
          />
          <div className={styles.introText}>
            <h1 className={styles.name}>{SITE_NAME}</h1>
            <h2 className={styles.title}>Software Engineer</h2>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Career History</h2>

      <div className={styles.timelineSection}>
        {timelineData.map((item) => (
          <div key={item.year} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineContent}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
