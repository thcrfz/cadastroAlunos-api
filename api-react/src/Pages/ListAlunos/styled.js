import styled from 'styled-components';
import { Card } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { primaryColor, primaryDarkColor } from '../../Config/colors';

export const AlunoContainer = styled(Card)`
  && {
    background: ${primaryColor};
    max-width: 100%;
    padding: 2em;
  }

  .summaryDetail{
    justify-content: space-between;
    padding: 1em;
    font-weight: 600;
    background: #506fa9;
    box-shadow: 5px 5px 5px  rgba(1, 1, 1, 0.5);
    color: #f6f4f1;
    span{
      margin-left: 2em;
    }
  }
  .containerInfo{
    display: grid;
    background: ${primaryDarkColor};
    justify-content: space-between;
    align-items: center;
    color: #f6f4f1;
    border-radius: 2px;
    box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.5);
    font-weight: 600;
    span{
      margin: 8px;
    }
    .buttonGroup{
      margin-top: 2em;
    }
  }

`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;

`;
export const EditButton = styled(Link)`
  background: #506fa9;
  padding: 1em;
  color: #fff;
  border-radius: 1px;
  box-shadow: 1px 1px 1px rgba(1, 1, 1, 0.5);

  :hover{
    opacity: 70%;
  }
`
export const NewUserLink = styled(Link)`
  background: #506fa9;
  padding: 1em;
  color: #fff;
  border-radius: 1px;
  box-shadow: 1px 1px 1px rgba(1, 1, 1, 0.5);
  transition: 1s;
  margin-top: 5em;
 :hover{
  opacity: 70%;
  transform: scale(2,2);
  transition: 1s;
 }
`
export const NewButton = styled(Link)`
  display: flex;
  padding: 1em;
  justify-content: space-between;
  transition: 1s;
  :hover{
    opacity: 70%;
    color: #0D962E;
    transform: scale(1.2,1.2);
    transition: 1s;
  }
`
export const UserOffline = styled.div`
  background: #b3b3b3;
  max-width: 100%;
  padding: 1em;
  flex-direction: column;
  height:25em;
  box-shadow: 5px 5px 5px rgba(0, 1, 1, 0.5);
  border-radius: 5px;
  .paragraph{
    font-weight: 500;
    background: #fff;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 2em;
    margin-bottom: 2em;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  li{
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
  }

`
