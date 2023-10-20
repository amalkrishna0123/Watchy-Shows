import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import NavBarItems from './components/NavBarItems'
import Slider from './components/Slider'
import ProductionHouse from './components/productionHouse'
import GenereMovieList from './components/GenereMovieList'


function App() {

  return (
    <>
    <NavBar/>
    <Slider/>
    <ProductionHouse/>
    <GenereMovieList/>
    </>
  )
}

export default App
