import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Project from './pages/Project/Project';
import Services from './pages/Services/Services';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Homepage /> } /> 
        <Route exact path="/services" element={ <Services /> } /> 
        <Route exact path="/about" element={ <About /> } /> 
        <Route exact path="/project" element={ <Project /> } /> 
        <Route exact path="/contact" element={ <Contact /> } /> 
        <Route exact path="/login" element={ <Login /> } /> 
      </Routes>
    </div>
  )
}
export default App;
