import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    html {
        background: hsl(0, 0%, 98%);
    }

    button {
        border: 0;
        background: transparent;
    }

`