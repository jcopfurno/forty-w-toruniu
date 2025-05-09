import { useState } from 'react'
import './App.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"

import Fort_IV from "./pages/FortyGlowne/Fort_IV.jsx"
import Fort_VII from "./pages/FortyGlowne/Fort_VII.jsx"
import Fort_XI from "./pages/FortyGlowne/Fort_XI.jsx"

import Fort_I from "./pages/FortyPosrednie/Fort_I.jsx"
import Fort_VI from "./pages/FortyPosrednie/Fort_VI.jsx"
import Fort_VIII from "./pages/FortyPosrednie/Fort_VIII.jsx"
import Fort_X from "./pages/FortyPosrednie/Fort_X.jsx"
import Fort_XII from "./pages/FortyPosrednie/Fort_XII.jsx"
import Fort_XIV from "./pages/FortyPosrednie/Fort_XIV.jsx"

import BastionI from "./pages/ObiektyRdzenia/BastionI.jsx"
import BateriaDobrzynska from "./pages/ObiektyRdzenia/BateriaDobrzynska.jsx"
import BramaKolejowa from "./pages/ObiektyRdzenia/BramaKolejowa.jsx"
import FortJakuba from "./pages/ObiektyRdzenia/FortJakuba.jsx"
import FortKolejowy from "./pages/ObiektyRdzenia/FortKolejowy.jsx"
import MagazynProwiantowy from "./pages/ObiektyRdzenia/MagazynProwiantowy.jsx"
import PrzyczolekMostowy from "./pages/ObiektyRdzenia/PrzyczolekMostowy.jsx"

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <body>
        <Header></Header>

        <Routes>

        <Route path = "/forty-w-toruniu/" element = {<Home/>} />
        <Route path = "/forty-w-toruniu/Kontakt" element = {<Kontakt/>} />

        <Route path = "/forty-w-toruniu/FortyGlowne/Fort_IV" element = {<Fort_IV/>} />
        <Route path = "/forty-w-toruniu/FortyGlowne/Fort_VII" element = {<Fort_VII/>} />
        <Route path = "/forty-w-toruniu/FortyGlowne/Fort_XI" element = {<Fort_XI/>} />

        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_I" element = {<Fort_I/>} />
        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_VI" element = {<Fort_VI/>} />
        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_VIII" element = {<Fort_VIII/>} />
        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_X" element = {<Fort_X/>} />
        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_XII" element = {<Fort_XII/>} />
        <Route path = "/forty-w-toruniu/FortyPosrednie/Fort_XIV" element = {<Fort_XIV/>} />

        <Route path = "/forty-w-toruniu/ObiektyRdzenia/BastionI" element = {<BastionI/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/BateriaDobrzynska" element = {<BateriaDobrzynska/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/BramaKolejowa" element = {<BramaKolejowa/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/FortJakuba" element = {<FortJakuba/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/FortKolejowy" element = {<FortKolejowy/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/MagazynProwiantowy" element = {<MagazynProwiantowy/>} />
        <Route path = "/forty-w-toruniu/ObiektyRdzenia/PrzyczolekMostowy" element = {<PrzyczolekMostowy/>} />

        </Routes>

        <Footer></Footer>
      </body>
    </>
  )
}

export default App
