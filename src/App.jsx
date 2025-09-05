/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'

import allData from '../src/data/data.json'


function App() {

  return (

    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home allData={allData} />} />

          <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />
          <Route path='/destination/:planetName' element={<Destination allData={allData} />} />

          <Route path='/crew' element={<Crew allData={allData} />} />
          <Route path='/technology' element={<Technology allData={allData} />} />
        </Routes>


      </Router>

    </>
  )
}
export default App