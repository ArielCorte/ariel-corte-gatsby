import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-dark: #ffffff;
        --secondary-dark: #7e7f82;
        --background-dark: #212529;
        --background-darker: #18191a;
    }

    body{
        margin: 0;
        background-color: var(--background-darker);
        color: var(--secondary-dark);
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'AlataRegular';
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: var(--primary-dark);
    }
`

export default GlobalStyle
