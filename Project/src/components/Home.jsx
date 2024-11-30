import React from 'react'
import Herosection from '../UI/Herosection'
import About from './About'
import OurScience from './OurScience'
import Contact from './Contact'
function Home() {
  return (
    <div>
      <Herosection/>
      <About/>
      <OurScience/>
      <Contact/>
    </div>
  )
}

export default Home
