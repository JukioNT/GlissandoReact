import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import Logo from "img/Logo.png";
import Login from "img/LogIn.png";
import Cadastro from "img/Cadastro.png";

const Menu = () => {
    return(
        <S.Cabecalho>
            <picture>
                <Link to="/">
                    <img src={ Logo } alt="" />
                </Link>
            </picture>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">
                            <img src={ Login } alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">
                            <img src={ Cadastro } alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;