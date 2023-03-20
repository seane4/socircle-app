import React from 'react'
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

import "./home.css"

function Home() {

  return (
    <div class="bg-light homeback">
      <Nav/>
      <Hero/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Home