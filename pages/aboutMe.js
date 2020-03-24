import React from 'react'

import MyHead from '../components/MyHead'
import HeaderComp from "../components/headerComponent"
import AboutPageSection from "../components/AboutMePageSection-history"

const About = () => (
    <div>
        <MyHead />
        <HeaderComp text='Things' path='/things' />
        <AboutPageSection />

    </div>
)
export default About
