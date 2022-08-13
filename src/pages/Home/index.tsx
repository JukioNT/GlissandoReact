import React from "react";
import * as S from "./styles";
import Sax from "img/Pintura (1).png"

const Home = () => {
    return(
        <S.Home>
            <h1>Principais Assuntos</h1>
            <div>
                <ul>
                    <li>
                        <h2>Mais</h2>
                    </li>
                    <li>
                        <img src={ Sax } alt="" />
                    </li>
                </ul>
            </div>
        </S.Home>
    );
};

export default Home;