import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import HeaderComp from "../components/headerComponent"
var _2016 = "I started the English preparatory class in 2016 and that year, I chased a lot of tourists to practice on the street.";
var _2017 = "The first year of my department, i was like in the dream because i have wanted to analys algorithms before coding. End of the year i decide to make an internship without any ideas about things however i supposed that i was done about everything. The idea of getting my first intership was an awesome decision for me because i saw myself what i did not learn yet.";
var _2018 = "The second year of my department, i was much more than my classmates because i have already learned HTML,CSS and JS with real project experience. In that year, i saw i have learned lots of subjects such as object oriented programming pillars and the logic of pointers. Additionally, i started to give lessons to high school students about the software. The end of the year i got crazy idea about my career. It will go to TUBITAK BILGEM to internship program again. It was impossible to apply because i was 2nd year of the department and normally they would not accept it. After getting there, i asked human resources manager, why did you accept me? She said i have been following you from the Linkedin for along time. I think I'm still surprised about it."
var _2019 = "In the third year, I decided to take more lessons from the upper class and I'm still alive..."



const About = () => (
    <div>
        <Head>
            <title>Mustafa Berat ARU - Personal Website</title>
            <link rel="icon" href="/m.png" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        </Head>

        <header className="header">
            <div className="container">
                <a className="header-logo" href="http://mustafaberat.now.sh/">
                    <img src="/m.png" alt="MLOGO"></img>
                </a>
                <div className="header-buttons">
                    <Link href="http://mustafaberat.now.sh/">
                        <a className="header-button-aboutMe header-button">Home Page</a>
                    </Link>
                </div>
            </div>
        </header>

        <section className="section">
            <div className="container">
                <h1 className="name-surname">About Me</h1>
                <p className="my-title about-my-title">I am <span className="about-spans">Mustafa Berat ARU</span></p>
                <p className="my-title about-my-title">{_2016}</p>
                <p className="my-title about-my-title">{_2017}</p>
                <p className="my-title about-my-title">{_2018}</p>
                <p className="my-title about-my-title">{_2019}</p>
                {/* <p className="my-title about-my-title"><span className="about-spans">I would say that i am a high potential ship with no sail</span></p> */}
                <article className="social-media-links about-social-media-area">
                    <Link href="https://www.instagram.com/mustafaberatt/">
                        <a className="social-media-instagram social-media-common" target="blank">
                            <i className="fab fa-instagram"></i>
                        </a></Link>
                    <Link href="https://github.com/mustafaberat/">
                        <a className="social-media-github social-media-common" target="blank">
                            <i className="fab fa-github-alt"></i>
                        </a></Link>
                    <Link href="https://www.facebook.com/mustafaberatt">
                        <a className="social-media-facebook social-media-common" target="blank">
                            <i className="fab fa-facebook-f"></i>
                        </a></Link>
                    <Link href="https://codepen.io/mustafaberatt">
                        <a className="social-media-codepen social-media-common" target="blank">
                            <i className="fab fa-codepen"></i>
                        </a></Link>
                    <Link href="https://www.linkedin.com/in/mustafaberatt/">
                        <a className="social-media-linkedin social-media-common" target="blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a></Link>
                </article>
            </div>
        </section>
    </div>
)
export default About
