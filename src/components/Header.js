import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About.js";
import Works from "../pages/Works.js";
import ONU from '../pages/ONU';
import Nav from './Rotas';
import { HeaderContainer, HeaderH} from './styles';

function Header() {
    return (
        <BrowserRouter>
            <HeaderContainer>
               <Nav />
            </HeaderContainer>
            <HeaderH>
            <h1>Portifolio Dyana</h1>
            </HeaderH>
            <Routes>
                <Route path="/"element={<Home />}/>
                <Route path="/about"element={<About />}/>
                <Route path="/works"element={<Works />}/>
                <Route path="/onu"element={<ONU />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Header;
