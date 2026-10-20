import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import BreadCrumbs from './Components/BreadCrumbs.jsx'
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import StudentCard from './Components/StudentCard.jsx'
import Pagination from './Components/Pagination.jsx'
import Alert from './Components/Alert.jsx'
import Footer from './Components/Footer.jsx'
import { browser, Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <browserRouter>
     <Routes>
         <Route  
            path = "/"
            element={<Home/>}
         />

         <Route
           path ="/students"
           element={<Students/>}
         />
          
           <Route
           path ="/courses"
           element={<Courses/>}
         />

          <Route
           path ="/students/:id"
           element={<StudentProfile/>}
         />
  </Routes>
              
        
     </browserRouter>
    <Navbar/>
    <BreadCrumbs/>
    <Header/>
    <Card/>
    <Pagination/>
    <Alert/>
    <Footer/>
    </>
  ) 
}

export default App
