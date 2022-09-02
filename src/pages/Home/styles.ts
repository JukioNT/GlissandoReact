import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Home = styled.section`
    background-color: ${colors.primary};
    height: 100%;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1{
        margin-top: 5px;
        display: flex;
        justify-content: center;
        height: 40px;
        width: 100%;
    }
    div{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90%;
        ul{
            li{
                margin: 5px;
                list-style-type: none;
                h2{
                    margin-left: 15Ppx;
                    justify-content: center;
                }
                img{
                    height: 250px;
                }
            }
        }
    }
`