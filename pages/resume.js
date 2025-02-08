import React from 'react';
import styles from '../styles/Resume.module.css';
import HeaderComp from '../components/headerComponent';
import WorkExperience from '../components/resumeComps/WorkExperience';
import Education from '../components/resumeComps/Education';

const Resume = () => {
    return (
        <div className={styles.container}>
            <HeaderComp />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Resume</h2>
                    <div className={styles.grid}>
                        <section className={styles.section}>
                            <WorkExperience />
                        </section>
                        <section className={styles.section}>
                            <Education />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Resume;
