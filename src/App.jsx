import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Icons from './components/Icons'
import Products from './components/Products'
import Shop from './components/Shop'
import ProductTwo from './components/ProductTwo'
import Socials from './components/Socials'
import Footer from './components/Footer'

function App() {
  return (
    <div >
    <Navbar/>
    <Main/>
    <Icons/>
    <Products/>
    <Shop/>
    <ProductTwo/>
    <Socials/>
    <Footer/>
    </div>
  )
}

export default App
