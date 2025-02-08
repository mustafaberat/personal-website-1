import React from 'react';
import styles from '../styles/Resume.module.css';
import HeaderComp from '../components/headerComponent';
import Technologies from '../components/resumeComps/Technologies';
import WorkExperience from '../components/resumeComps/WorkExperience';
import Education from '../components/resumeComps/Education';

const Resume = () => {
    return (
        <div className={styles.container}>
            <HeaderComp />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Resume</h1>
                    <div className={styles.grid}>
                        <section className={styles.section}>
                            <Technologies />
                        </section>
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
