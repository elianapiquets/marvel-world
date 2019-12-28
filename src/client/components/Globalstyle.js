import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
    background: ${props => props.theme.color.gray_10}
  }


  html {
    line-height: 1.15; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a{
    cursor:pointer;
  }
`;
