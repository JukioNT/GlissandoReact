import React from "react";
import * as S from "./styles";
import Sax from "img/Pintura (1).png"
import Sax2 from "img/Pintura (2).png"
import Guitar from "img/Pintura (3).png"
import Violin from "img/Pintura (4).png"
import Violin2 from "img/Pintura (5).png"
import LearnMore from "img/Learn More.png"

const Home = () => {
    return(
        <S.Home>
            <h1>Principais Assuntos</h1>
            <div className="assuntos">
                <ul>
                    <li>
                        <h2>Mais</h2>
                    </li>
                    <li>
                        <img src={ Sax } alt="" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Notas</h2>
                    </li>
                    <li>
                        <img src={ Sax2 } alt="" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Acordes</h2>
                    </li>
                    <li>
                        <img src={ Guitar } alt="" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Tempo</h2>
                    </li>
                    <li>
                        <img src={ Violin } alt="" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Intervalos</h2>
                    </li>
                    <li>
                        <img src={ Violin2 } alt="" />
                    </li>
                </ul>
            </div>
            <div className="glissando">
                <h1>Glissando</h1>
            </div>
            <a>O site para aprender teoria musical</a>
            <div className="more">
                <img src={ LearnMore } alt="" />
            </div>
        </S.Home>
    );
};

export default Home;