import React from 'react'
import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Trust from './Trust/Trust'
import About from './About/About'

const App = () => {
  return (

    <>
    
    <div className='body'>
        <div className="header">
          <Header/>
        </div>

        <div className="hero">
          <Hero/>
        </div>

        <div className="trust">
          <Trust/>
        </div>

        <div className="about">
          <About/>
        </div>
    </div>
    
    
    </>
    
  )
}

export default App