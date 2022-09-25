import React from "react";
import Lottie from "lottie-react";
import Person01 from "../../img/Person01.gif"

import * as S from "../Login/styles";

const Login = () =>{
    return(
        <S.Section>
            <div className="main">
                <div className="left">
                    <h1>Comece a aprender música</h1>
                    <img src={ Person01 } alt="" />
                </div>
                <div className="right">
                    <div className="form">
                        <h1>LOGIN</h1>
                        <div className="textfield">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" name="usuario" placeholder="Usuário" />
                        </div>
                        <div className="textfield">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
                        </div>
                        <button className="button">Login</button>
                    </div>
                </div>
            </div>
        </S.Section>
    );
};

export default Login;