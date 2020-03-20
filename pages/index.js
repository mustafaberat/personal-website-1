// Note: TO RUN = YARN DEV
import React from 'react'

import MyHead from '../components/MyHead'
import HeaderComp from '../components/headerComponent'
import SocialMedia from '../components/SocialMedia'

const Home = () => (
  <div>
    <MyHead />
    <HeaderComp text='About Me' path='/aboutMe' />

    <section className="section">
      <div className="container">
        <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
        <p className="my-title">Software Engineering Student</p>
        <SocialMedia />
      </div>
    </section>
  </div>
)

export default Home
