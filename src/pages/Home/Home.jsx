import React from 'react'
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../Shop/Shop"
import Community from "../Community/Community";

function Home() {
  return (
    <div>
      <Nav/>
      {/* <Routes>
          <Route exact path="/" component={<Home/>}/>
          <Route path="/shop" component={<Shop/>}/>
          <Route path="/community" component={<Community/>}/>
      </Routes> */}
      <Hero/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Home