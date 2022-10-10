import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About.js";
import ONU from '../pages/ONU';
import Nav from './Rotas'


function Header() {
    return (
        
            
            <BrowserRouter>
           <div>
           <h1>Blog da Dyana</h1>
            <Nav />
           </div>
            
            <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/about"element={<About />}/>
            <Route path="/onu"element={<ONU />}/>
            </Routes>
            </BrowserRouter>
     
    );
}

export default Header;
