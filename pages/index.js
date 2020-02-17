import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Mustafa Berat ARU - Kişisel Web Sitesi</title>
      <link rel="icon" href="/m.png" />
    </Head>

    <div className="inner">
      <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
      <p className="my-title">Software Engineering Student</p>
      <div className="social-media-links">
        <Link href="https://github.com/mustafaberat/">
          <a className="social-media-github social-media-common"></a></Link>
        <Link href="https://www.linkedin.com/in/mustafaberatt/">
          <a className="social-media-linkedin social-media-common"></a></Link>
        <Link href="https://codepen.io/mustafaberatt">
          <a className="social-media-codepen social-media-common"></a></Link>
      </div>
    </div>
  </div>
)

export default Home
