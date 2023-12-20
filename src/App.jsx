import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Project from './components/project/Project'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Project />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    
    </>
  )
}



export default App