import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Footer />
      <Header />
      <Testimonial />
      <Skills />
      <Work />
    </div>
  )
}

export default App;