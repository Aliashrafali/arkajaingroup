import React from 'react'
import './App.css'
// import Form from './components/Form'
// import Bootstrap from './components/Bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'

function App() {   
  return (
    <>
      {/* <Form /> */}
      {/* <Bootstrap /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Menu />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App
