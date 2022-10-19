import React from "react";
import Port from "../components/Imagens/Port.png"
import * as S from "../components/styles"

const Workprops = ({
  title,
  work,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7
}) => {
  return (
    <S.DivW>
      <h1>{title}</h1>
      
          <S.Figure>
          <S.Img src={Port} />
            <a href= 'https://codepen.io/GabeTiago/full/LYQpbWa' target="_blanck" title="Amigão">
              Amigão
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Port} />
            <a href={work2} target="_blanck" title="The Withcer">
              The Withcer
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Port} />
            <a href={work3} target="_blanck" title="Beat">
              Beat
            </a>
          </S.Figure>
          <S.Figure>
            <S.Img src={Port} />
            <a href= "https://dyanafurriel.github.io/Desafio/" target="_blanck" title="Portiflow">
              Portflow
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Port} />
            <a href= "https://codesandbox.io/s/calculadora-ti3khc?file=/src/App.js" target="_blanck" title="Calculadora">
              Calculadora
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Port} />
            <a href= 'https://codesandbox.io/s/desafio-api-harry-potter-forked-om6xgu' target="_blanck" title="Harry Potter">
              Harry Potter
            </a>
          </S.Figure>
          <S.Figure>
          <S.Img src={Port} />
            <a href= 'https://github.com/DyanaFurriel/Recipes-Pair-VNW.git' target="_blanck" title="Receitas">
              Receitas
            </a>
          </S.Figure>
     
    </S.DivW>
  );
};

export default Workprops;
