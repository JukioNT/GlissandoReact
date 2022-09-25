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
        margin-top: 10vh;
        display: flex;
        justify-content: center;
        height: 40px;
        width: 100%;
    }
    a{
        display:flex;
        justify-content: center;
        width: 100%;
    }
    div.assuntos{
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
                    justify-content: center;
                    text-align: center;
                }
                img{
                    height: 300px;
                }
                img:hover{
                    filter: grayscale(50);
                    cursor: pointer;
                }
            }
        }
    }
    div.glissando{
        margin-top:100px;
    }
    div.more{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 60px;
            margin-top: 5px;
            margin-bottom: 10px;
        }
    }
`