import React from "react";
import Dyana from '../components/Imagens/Dyana.jpg'
import * as S from '../components/styles'

function Home() {
    return (
       <S.DivHome>
        <S.DivInf>
        <h1>Eu sou a Dyana Furriel</h1>
        <p>
            Tenho 26 anos, moro em Costa Barros - Rio de Janeiro

        </p>
        </S.DivInf>
        <figure>
        <S.ImgHome src={Dyana}/>
        </figure>
        
       </S.DivHome>
    );
}

export default Home;
