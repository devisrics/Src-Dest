import { useState } from 'react'
import './App.css'
import NavbarScreen from './screens/NavbarScreen'
import HeroScreen from './screens/HeroScreen'
import FeatureScreen from './screens/FeatureScreen'
import WorkScreen from './screens/WorkScreen'
import DestinationScreen from './screens/DestinationScreen'
import TestimonialScreen from './screens/TestimonialScreen'
import PricingScreen from './screens/PricingScreen'
import FooterScreen from './screens/FooterScreen'

function App() {
  return (
    <>
      <NavbarScreen />
      <div id="home">
        <HeroScreen />
      </div>
      <div id="features">
        <FeatureScreen />
      </div>
      <div id="work">
        <WorkScreen />
      </div>
      <div id="destinations">
        <DestinationScreen />
        <TestimonialScreen />
      </div>
      <div id="pricing">
        <PricingScreen />
      </div>
      <div id="contact">
        <FooterScreen />
      </div>
    </>
  )
}

export default App
