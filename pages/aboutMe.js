import React from 'react'

import MyHead from '../components/MyHead'
import HeaderComp from "../components/headerComponent"
import SocialMedia from '../components/SocialMedia'
const MY_URL = 'http://mustafaberat.now.sh/'
var _2016 = "I started the English preparatory class in 2016 and that year, I chased a lot of tourists to practice on the street.";
var _2017 = "The first year of my department, i was like in a dream because i have wanted to analyze algorithms before start coding. End of the year i decided to make an internship without any idea about the field work however i supposed that I did everything enough. I think the idea of getting my first intership was an awesome decision because I had the chance to observe what I didnt learn yet.";
var _2018 = "The second year of my department, I was knowing much more than my classmates because i have already learned HTML,CSS and JS with real project experience. In that year, i realize that i have learned lots of subjects such as object oriented programming pillars and the logic of pointers and much more. Additionally, I became software tutor for high school students. At the end of the year I decided to take a crazy step about my career that I will go to TUBITAK BILGEM for internship program. It was impossible to apply because i was 2nd year of the department and normally they would not accept it but they did. After getting there, i asked human resources manager, why did you accept me? She said i have been following you from the Linkedin for along time. I think I'm still surprised about it."
var _2019 = "In the third year, I decided to take more lessons from the upper class. ";


const About = () => (
    <div>
        <MyHead />
        <HeaderComp text='Home Page' path={MY_URL} />

        <section className="section">
            <div className="container">
                <h1 className="name-surname">About Me</h1>
                <p className="my-title about-my-title">I am <span className="about-spans">Mustafa Berat ARU</span></p>
                <p className="my-title about-my-title">{_2016}</p>
                <p className="my-title about-my-title">{_2017}</p>
                <p className="my-title about-my-title">{_2018}</p>
                <p className="my-title about-my-title">{_2019} <span className="about-spans">My next goal is to work and study at the same time at the end of 2020</span></p>
                {/* <p className="my-title about-my-title"><span className="about-spans">I would say that i am a high potential ship with no sail</span></p> */}
                <SocialMedia />
            </div>
        </section>
    </div>
)
export default About
