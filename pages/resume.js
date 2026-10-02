import Layout from "../components/Layout";
import WorkExperience from "../components/resume/WorkExperience";
import Education from "../components/resume/Education";
import styles from "../styles/Resume.module.css";

export default function Resume() {
  return (
    <Layout
      title="Resume — Mustafa Berat ARU"
      description="Work experience and education resume of Mustafa Berat ARU, Senior Software Engineer."
      path="/resume"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.content}>
            <h2 className={styles.title}>Resume</h2>
            <div className={styles.grid}>
              <section className={`${styles.section} ${styles.workExperience}`}>
                <WorkExperience />
              </section>
              <section className={`${styles.section} ${styles.education}`}>
                <Education />
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
