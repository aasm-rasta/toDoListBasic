//esse arquivo contem a configuração resetada inicial do css tipo *{} 

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyle;