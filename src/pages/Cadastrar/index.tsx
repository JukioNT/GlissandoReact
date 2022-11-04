import React from "react";
import Person02 from "../../img/Person02.gif";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "../Login/styles";
import { IErrorResponse, IUser } from "interfaces/user.interface";
import { AxiosError } from "axios";
import { apiUser } from "services/data";

const Cadastrar = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<IUser>({
      name: '',
      email: '',
      password: '',
    })
    async function handleChange(e: IUser) {
      setFormData((state: IUser | undefined) => ({ ...state, ...e }))
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      try {
        await apiUser.register(formData);
        toast.success("Cadastro realizado com sucesso!");
        navigate('/login')
      } catch (error) {
        const err = error as AxiosError<IErrorResponse>
        let messages = err.response?.data.message
        if (err.response?.data.errors) {
          messages = err.response?.data.errors?.map((i) => i.message)
            .reduce((total, cur) => `${total} ${cur}`)
        }
        toast.error(messages)
      }
    }
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
                        <form method="post" onSubmit={ handleSubmit }>
                          <div className="textfield">
                              <label htmlFor="usuario">Usuario</label>
                              <input type="text" name="usuario" placeholder="Usuário" 
                              onChange={(e) => handleChange({ name: e.target.value })}
                              value = {formData?.name}/>
                          </div>
                          <div className="textfield">
                              <label htmlFor="senha">Email</label>
                              <input type="text" name="email" placeholder="Email" 
                              onChange={(e) => handleChange({ email: e.target.value })}
                              value = {formData?.email}/>
                          </div>
                          <div className="textfield">
                              <label htmlFor="senha">Senha</label>
                              <input type="password" name="senha" placeholder="Senha" 
                              onChange={(e) => handleChange({ password: e.target.value })}
                              value = {formData?.password}/>
                          </div>
                          <button className="button">Cadastrar</button>
                          </form>
                      </div>
                </div>
            </div>
        </S.Section>
    );
};

export default Cadastrar;