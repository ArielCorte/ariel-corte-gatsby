import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-dark: #ffffff;
        --secondary-dark: #7e7f82;
        --background-dark: #212529;
        --background-darker: #18191a;

        --golden-ratio: 1.618;
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

    section {
    min-height: 100vh;
    max-width: 80%;
    margin: auto;
    }

    a {
        text-decoration: none;
        color: var(--primary-dark);
    }

    h1, h2, h3 {
        color: var(--primary-dark);
    }

    h1 {
        font-size: 5rem;
        font-weight: 200;
    }

    h2 {
        font-size: 3rem;
        font-weight: 200;
        padding-top: 1rem;
        margin-bottom: 2rem;
    }
`

export default GlobalStyle
