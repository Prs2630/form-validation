import React from 'react'
import './App.css'
import Navbar from './compoents/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
 import Formvald from './compoents/Formvald';
 import {Route,BrowserRouter,Routes} from 'react-router-dom';
 
import Category from './compoents/Category';
import Footer from './compoents/Footer';



function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Footer/>
        <Routes>
            <Route exact path='/' element={<Category/>}/>
            <Route path='/form' element={<Formvald/>}/>
            
            

        </Routes>
    </BrowserRouter>
  )
}

export default App
