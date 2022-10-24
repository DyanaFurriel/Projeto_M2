import React from "react";
import Port from "../components/Imagens/Port.png";
import Amg from "../components/Imagens/Amg.png";
import Calc from "../components/Imagens/calc.png";
import Har from "../components/Imagens/har.png";
import Rec from "../components/Imagens/Rec.png";
import Fs from "../components/Imagens/fs.png";
import Finn from "../components/Imagens/finn.png"

import * as S from "../components/styles"

function Workprops (){
  return (
    <S.DivW>

      
          <S.Figure>
          <S.Img src={Amg} />
            <a href= 'https://codesandbox.io/s/site-um-amigao-d6ymup?file=/src/App.js' target="_blanck" title="Amigão">
              Amigão
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Finn} />
            <a href= "https://dyanafurriel.github.io/Finn/" target="_blanck" title="The Withcer">
              Finn
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Fs} />
            <a href= "https://codesandbox.io/s/pagina-de-filmes-e-series-b6ib55?file=/src/Rotas/Header.js" target="_blanck" title="DyFlix">
              DyfFix
            </a>
          </S.Figure>
          <S.Figure>
            <S.Img src={Port} />
            <a href= "https://dyanafurriel.github.io/Desafio/" target="_blanck" title="Portiflow">
              Portflow
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Calc} />
            <a href= "https://codesandbox.io/s/calculadora-ti3khc?file=/src/App.js" target="_blanck" title="Calculadora">
              Calculadora
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Har} />
            <a href= 'https://codesandbox.io/s/desafio-api-harry-potter-forked-om6xgu' target="_blanck" title="Harry Potter">
              Harry Potter
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Rec} />
            <a href= 'https://github.com/DyanaFurriel/Recipes-Pair-VNW.git' target="_blanck" title="Receitas">
              Receitas
            </a>
          </S.Figure>
     
    </S.DivW>
  );
};

export default Workprops;
