
import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import styled from 'styled-components';

export default createGlobalStyle`
   ${normalize}

   *, *:before, *:after {
      box-sizing: border-box;
    }
  
    body,
    html {
      height: 100%;
      margin: 10;
    }
  
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      background-color: #fff;
      line-height: 1.4;
    }
  
    a:link,
    a:visited {
      color: #0077cc;
    }
  
    a:hover,
    a:focus {
      color: #004499;
    }
  
    code,
    pre {
      max-width: 100%;
      overflow: auto;
      margin: 0 auto;
    }
`

export const TitleMyNotes = styled.h2`
  text-align: center;
`