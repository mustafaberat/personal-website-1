import React from 'react';

import HeaderComp from '../components/headerComponent';
import Technologies from '../components/resumeComps/Technologies'
import WorkExperience from '../components/resumeComps/WorkExperience'
import Education from '../components/resumeComps/Education'


const Resume = () => {
    return (
        <div>
            <HeaderComp />
            <Technologies />
            <WorkExperience />
            <Education />
        </div>
    )
}
export default Resume
