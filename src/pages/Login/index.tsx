import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Person01 from "../../img/Person01.gif"
import { toast } from "react-toastify";

import * as S from "../Login/styles";
import { useAuth } from "hooks/authHook";
import { IErrorResponse, IUser } from "interfaces/user.interface";
import { AxiosError } from "axios";

const Login = () =>{
    const navigate = useNavigate();
    const { signIn } = useAuth()
    const [formData, setFormData] = useState<IUser>({
      email: '',
      password: '',
    })
    async function handleChange(e: IUser) {
      setFormData((state: IUser | undefined) => ({ ...state, ...e }))
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      try {
        const { email, password } = formData
        await signIn({
          email: String(email),
          password: String(password),
        })
        toast.success("Login realizado com sucesso!");
        navigate('/adm')
      } catch (error) {
        const err = error as AxiosError<IErrorResponse>
        toast.error(String(err.response?.data))
      }
    }
  
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
                        <form method="post" onSubmit={ handleSubmit }>
                        <div className="textfield">
                            <label htmlFor="usuario">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" 
                            onChange={(e) => handleChange({ email: e.target.value })}
                            value={formData?.email}
                        />
                        </div>
                        <div className="textfield">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" id="senha" placeholder="Senha" 
                             onChange={(e) => handleChange({ password: e.target.value })}
                             value={formData?.password}
                        />
                        </div>
                        <button className="button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </S.Section>
    );
};

export default Login;