import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About.js";
import Works from "../pages/Works.js";
import Nav from './Rotas';
import  * as S from './styles';

function Header() {
    return (
        <BrowserRouter>
            <S.HeaderContainer>
               <Nav />
            </S.HeaderContainer>
            <S.HeaderH>
            <S.H>Portifólio </S.H>
            </S.HeaderH>
            <Routes>
                <Route path="/"element={<Home />}/>
                <Route path="/about"element={<About />}/>
                <Route path="/works"element={<Works />}/>
               
            </Routes>
        </BrowserRouter>
    );
}

export default Header;
