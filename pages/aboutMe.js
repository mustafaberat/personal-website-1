import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import HeaderComp from "../components/headerComponent"
var _2016 = "I started the English preparatory class in 2016 and that year, I chased a lot of tourists to practice on the street.";
var _2017_2020 = "In my department, i was like the dream.";


const About = () => (
    <div>
        <Head>
            <title>Mustafa Berat ARU - Kişisel Web Sitesi</title>
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
                <p className="my-title about-my-title">{_2017_2020}</p>
                <p className="my-title about-my-title"><span className="about-spans">I would say that i am a high potential ship with no sail</span></p>
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
