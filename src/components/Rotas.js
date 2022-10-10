import React from 'react'
import {Link} from 'react-router-dom';


function Rotas() {
    return (
        <div>

<nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/onu'>ONU</Link>
                </ul>
            </nav>
            
            
        </div>

    );
}

export default Rotas;
