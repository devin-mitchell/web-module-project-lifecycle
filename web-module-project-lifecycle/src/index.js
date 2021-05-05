import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    text-decoration: none;
  }
 
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  } 
`
ReactDOM.render(
    <>
    <GlobalStyle />
    <App />
    </>,
    document.getElementById('root')
);

