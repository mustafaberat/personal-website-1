import Image from "next/image";
import styles from "../styles/About.module.css";
import { timelineData } from "../data/about";
import { SITE_NAME } from "../data/site";

export default function AboutTimeline() {
  return (
    <article className={styles.page}>
      <header className={styles.intro}>
        <Image
          src="/img/my-photo.jpeg"
          alt={`${SITE_NAME} profile photo`}
          width={112}
          height={112}
          sizes="112px"
          className={styles.photo}
        />
        <div>
          <h1 className={styles.name}>{SITE_NAME}</h1>
          <p className={styles.role}>Senior Software Engineer</p>
        </div>
      </header>

      <section className={styles.history} aria-labelledby="career-heading">
        <h2 id="career-heading" className={styles.heading}>
          Career History
        </h2>

        <ol className={styles.timeline}>
          {timelineData.map((item, index) => (
            <li
              key={item.year}
              className={styles.entry}
              style={{ "--entry-i": index }}
            >
              <time className={styles.year} dateTime={item.year}>
                {item.year}
              </time>
              <p className={styles.body}>{item.content}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
