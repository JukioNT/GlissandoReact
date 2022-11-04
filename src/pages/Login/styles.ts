import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
export const Section = styled.section`
    
    div.main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.left{
        width: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            transform: translateY(10vh);
            color: ${colors.primary};
            font-weight: 1000;
            font-size: 3vw;
        }
        img{
            transform: translateY(-10vh);
            margin-right:30vw;
            height:75vh;
        }
    }
    div.form{
        margin-left: 10vw;
        width: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 30px;
        background: ${colors.header};
        border-radius: 20px;
        h1{
            color: ${colors.secondary};
            font-weight: 800;
            margin: 0;
        }
        div.textfield{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 10px;
            input{
                width: 25vw;
                border: none;
                border-radius: 100px;
                padding: 15px;
                background-color: #2c2c2c;
                color: ${colors.secondary};
                outline: none;
                box-sizing: border-box;
            }
            label{
                transform: translateX(1vw);
                color: ${colors.login};
            }
        }
        button.button{
            width: 25vw;
            padding: 10px 0px;
            margin: 25px;
            border: none;
            border-radius: 10px;
            outline: none;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 3px;
            background: ${colors.secondary};
            cursor: pointer;
        }
    }

`