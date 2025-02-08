import React, { Suspense } from 'react';
import styles from '../styles/Resume.module.css';
import HeaderComp from '../components/headerComponent';

// Lazy load the components
const WorkExperience = React.lazy(() => import('../components/resumeComps/WorkExperience'));
const Education = React.lazy(() => import('../components/resumeComps/Education'));

const Resume = () => {
    return (
        <div className={styles.container}>
            <HeaderComp />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Resume</h2>
                    <div className={styles.grid}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <section className={`${styles.section} ${styles.workExperience}`}>
                                <WorkExperience />
                            </section>
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <section className={`${styles.section} ${styles.education}`}>
                                <Education />
                            </section>
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Resume;
