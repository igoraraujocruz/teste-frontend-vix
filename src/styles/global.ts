import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
        --background: #F3F3F3;
        font-family:Roboto, Helvetica, sans-serif;
    }

    *  {
        text-decoration: none;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1175px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;
