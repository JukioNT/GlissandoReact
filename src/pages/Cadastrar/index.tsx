import React from "react";
import Person02 from "../../img/Person02.gif";

import * as S from "../Login/styles";

const Cadastrar = () => {
    return (
        <S.Section>
            <div className="main">
                <div className="left">
                    <h1>Comece a aprender música</h1>
                    <img src={ Person02 } alt="" />
                </div>
                <div className="right">
                    <div className="form">
                        <h1>Cadastro</h1>
                        <div className="textfield">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" name="usuario" placeholder="Usuário" />
                        </div>
                        <div className="textfield">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
                        </div>
                        <div className="textfield">
                            <label htmlFor="senha">Repita sua senha</label>
                            <input type="password" name="senha" placeholder="Senha" />
                        </div>
                        <button className="button">Cadastrar</button>
                    </div>
                </div>
            </div>
        </S.Section>
    );
};

export default Cadastrar;