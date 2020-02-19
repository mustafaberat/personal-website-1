import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import HeaderComp from "../components/headerComponent"

const Home = () => (
    <div>
        <Head>
            <title>Mustafa Berat ARU - Kişisel Web Sitesi</title>
            <link rel="icon" href="/m.png" href="/#" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        </Head>
        <HeaderComp></HeaderComp>
        <section className="section">
            <div className="container">
                <h1 className="name-surname">HEY WELCOME!</h1>
                <p className="my-title">I am working on it!</p>
                <article className="social-media-links">
                    <Link href="https://www.instagram.com/mustafaberatt/">
                        <a className="social-media-instagram social-media-common">
                            <i class="fab fa-instagram"></i>
                        </a></Link>
                    <Link href="https://github.com/mustafaberat/">
                        <a className="social-media-github social-media-common">
                            <i class="fab fa-github-alt"></i>
                        </a></Link>
                    <Link href="https://www.facebook.com/mustafaberatt">
                        <a className="social-media-facebook social-media-common">
                            <i class="fab fa-facebook-f"></i>
                        </a></Link>
                    <Link href="https://codepen.io/mustafaberatt">
                        <a className="social-media-codepen social-media-common">
                            <i class="fab fa-codepen"></i>
                        </a></Link>
                    <Link href="https://www.linkedin.com/in/mustafaberatt/">
                        <a className="social-media-linkedin social-media-common">
                            <i class="fab fa-linkedin-in"></i>
                        </a></Link>
                </article>
            </div>
        </section>
    </div>
)

export default Home
