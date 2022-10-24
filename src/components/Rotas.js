import React from 'react'

import { ListNav,LinkS } from './styles';

function Rotas() {
    return (
        <nav>
            <ListNav>
                <LinkS to='/'>Home</LinkS>
                <LinkS to='/about'>About</LinkS>
                <LinkS to='/works'>Works</LinkS>

            </ListNav>
        </nav> 
    );
}

export default Rotas;
