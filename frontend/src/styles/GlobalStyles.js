import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import imageBackground from '../assets/background/background.svg';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
      background: #f0f0f5 url(${imageBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
      font: 16px Roboto, sans-serif;
    }

    #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }
    button {
        cursor: pointer;
    }
`;
