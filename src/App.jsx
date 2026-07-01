import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Projets from './components/Projets'
import ProjetsGit from './components/ProjetsGit'
import Competences from './components/Competences'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Projets></Projets>
      <ProjetsGit></ProjetsGit>
      <Competences></Competences>
    </>
  )
}

export default App
