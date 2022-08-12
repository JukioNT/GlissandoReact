import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`

export const colors = {
    primary: "#181818",
    secondary: "#38B7F1",
    login: "#98d6f3",
    header: "#202020",
    third: "#ffb74d",
    thirdLight: "#ffe9ca",
    white: "#ffffff",
    black: "#000000",
}

