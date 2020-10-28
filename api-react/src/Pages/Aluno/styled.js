import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Form = styled.form`

        display: flex;
        flex-direction: column;

    .form-control{
      margin: 1em;
    }

`;
export const ButtonGroup = styled.div`
  display: flex;
  float: left;
`
export const BackLink = styled(Link)`
  margin-top: 1rem;
  margin-left: 21rem;
  font-weight: 700;
  transition: 1s;

  :hover{
    transform:scale(1.2,1.2);
    transition: 1s;
  }
`

