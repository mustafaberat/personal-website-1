import React from 'react'

import MyHead from '../components/MyHead'
import HeaderComp from "../components/headerComponent"
import AboutPageSection from "../components/AboutMePageSection-history"

const MY_URL = 'http://mustafaberat.now.sh/'


const About = () => (
    <div>
        <MyHead />
        <HeaderComp text='Home Page' path={MY_URL} />
        <AboutPageSection />

    </div>
)
export default About
