import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Cabecalho = styled.header`
  display: flex;
  background-color: ${colors.header};
  picture img {
    height: 3.7rem;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    form{
      display: flex;
      align-items: center;
      background: ${colors.primary};
      border-radius: 60px;
      width: 400px;
      height: 30px;
      border: 0;
      input{
        flex: 1;
        outline: none;
        background: transparent;
        border: 0;
        padding-left: 10px;
        outline: none;
        color: ${colors.login}
      }
      button{
        border: 0;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
        background: ${colors.secondary};
      }
    }
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 0.5em;
        img{
          width: 80px;
        }
      }
    }
  }
`
