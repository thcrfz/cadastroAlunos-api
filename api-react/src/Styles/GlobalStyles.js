import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../Config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: 'roboto', sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }
  html, bodym #root {
    height: 100%;
  }
  button{
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    opacity: 1;
    transition: 0.3s;
  }
  button:hover{
    opacity: 0.8;
    background: ${colors.primaryDarkColor};
    color: #fff;
  }
  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }
  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 600px;
  background: #fff;
  margin: 30px auto;
  margin-top: 5em;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.5);
`;
