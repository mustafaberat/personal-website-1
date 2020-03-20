// Note: TO RUN = YARN DEV
import React from 'react'

import MyHead from '../components/MyHead'
import HeaderComp from '../components/headerComponent'
import HomePageSection from '../components/HomePageSection-namesurname'

const Home = () => (
  <div>
    <MyHead />
    <HeaderComp text='About Me' path='/aboutMe' />
    <HomePageSection />
  </div>
)

export default Home
