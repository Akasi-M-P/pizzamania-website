import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header"
import Carousel from "./Carousel"
import About  from "./About"
import PizzaTypes from "./PizzaTypes"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <PizzaTypes />
      <Footer />
    </div>
    
  )
}

export default App
