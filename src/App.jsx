import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { About } from './About'
import Nav from './Nav'
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App