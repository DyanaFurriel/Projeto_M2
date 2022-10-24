import React from "react";
import Dyana from '../components/Imagens/Dyana.jpg'
import * as S from '../components/styles'

function Home() {
    return (
       <S.DivHome>
        <S.DivInf>
        <S.H>Seja bem-vindo(a)!</S.H>
        <S.P>
            Sou a Dyana Furriel!
        </S.P>

        </S.DivInf>
        
        <S.Figure>
        <S.ImgHome src={Dyana}/>
        </S.Figure>
        
       </S.DivHome>
    );
}

export default Home;
