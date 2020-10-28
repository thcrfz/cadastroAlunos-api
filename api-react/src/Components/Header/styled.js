import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { primaryColor } from '../../Config/colors';


export const Nav = styled(AppBar)`
 && {
  background: ${primaryColor};
  flex-direction: inherit;
  align-items: center;
  justify-content: center;
  color: #fff;
  a {
    display: inline-block;
    color: #fff;
    margin: 1em;
    font-weight: bold;
    justify-content: space-between;
  }
  .userStatus {
    color:#bada55;
  }
  .userNameStatus{
    display: flex;
    margin-right:1rem;
    align-items: center;
    justify-content: space-between;
    max-width: 30%;
  }
  .userNameStatus span{
    font-weight: 700;
  }
  .buttonsContainer{
    display: flex;
    max-width: 70%;
  }

  .newUser:hover{
    color: #bada55;
    opacity: 90%;
  }
  .newUser svg{
    margin-right: 1rem;
  }

  .home:hover{
    color: #ead65e;
    opacity: 90%;
  }
  .home svg{
    margin-right: 1rem;
  }

  .login:hover{
    color: #b2c1d3;
    opacity: 90%;
  }
  .login svg{
    margin-right: 1rem;
  }


 }
`;
