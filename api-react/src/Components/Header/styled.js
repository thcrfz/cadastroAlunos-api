import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { primaryColor } from '../../Config/colors';
import { Link } from 'react-router-dom';

export const Nav = styled(AppBar)`
 && {
  background: ${primaryColor};
  flex-direction: inherit;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  a{
    margin-left: 1em;
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
 }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LinkTo = styled(Link)`
  padding: 1em;
  border-bottom-color: blue;
  border: 2em blanchedalmond;
  color: #fff;
  transition: 1s;

 :hover{
  background: white;
  color:${primaryColor};
  transform: scale(1.2,1.2);
  transition: 1s;
 }
`
