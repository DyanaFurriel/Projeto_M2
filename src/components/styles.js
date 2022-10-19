import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 90%;
    
`;

export const HeaderH = styled.div`
    align-items: center;
    display: flex;
    border: solid;
    justify-content: center;
`;

export const ListNav = styled.ul`
    display: flex;
    justify-content: space-around;
    border:solid;
    width: 35vw;
`;

export const ImgHome = styled.img`

height: 70vh;
object-fit: cover;
` 

export const LinkS = styled(Link) `
text-decoration: none;
color: black;
font-size: 30px;
`

export const DivHome = styled.div`
width: 100%;
border:solid;
display:flex;
justify-content: space-around;
` 

export const DivInf = styled.div`
width: 100%;
border:solid;
display:flex;
justify-content: space-evenly;
flex-direction: column;

`
export const DivW = styled.div `
display: flex;
flex-wrap: wrap;
border:solid;
`

export const Img = styled.img `
width: 80%;
object-fit: cover;
`

export const Figure = styled.figure `
width:30%;
display: flex;
flex-direction: column;
align-items: center;
`
