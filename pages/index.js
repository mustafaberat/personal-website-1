import React from 'react'
import Link from 'next/link'

import MyHead from '../components/MyHead'
import HeaderComp from '../components/headerComponent'

const Home = () => (
  <div>
    <MyHead />
    <HeaderComp text='About Me' path='/aboutMe' />

    <section className="section">
      <div className="container">
        <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
        <p className="my-title">Software Engineering Student</p>
        <article className="social-media-links">
          <Link href="https://www.instagram.com/mustafaberatt/">
            <a className="social-media-instagram social-media-common" target="blank">
              <i className="fab fa-instagram"></i>
            </a></Link>
          <Link href="https://www.github.com/mustafaberat/">
            <a className="social-media-github social-media-common" target="blank">
              <i className="fab fa-github-alt"></i>
            </a></Link>
          <Link href="https://www.facebook.com/mustafaberatt">
            <a className="social-media-facebook social-media-common" target="blank">
              <i className="fab fa-facebook-f"></i>
            </a></Link>
          <Link href="https://www.codepen.io/mustafaberatt">
            <a className="social-media-codepen social-media-common" target="blank">
              <i className="fab fa-codepen"></i>
            </a></Link>
          <Link href="https://www.linkedin.com/in/mustafaberatt/">
            <a className="social-media-linkedin social-media-common" target="blank">
              <i className="fab fa-linkedin-in"></i>
            </a></Link>
          <Link href="https://medium.com/@mustafaberat">
            <a className="social-media-medium social-media-common" target="blank">
              <i className="fab fa-medium-m"></i>
            </a></Link>
        </article>
      </div>
    </section>
  </div>
)

export default Home
