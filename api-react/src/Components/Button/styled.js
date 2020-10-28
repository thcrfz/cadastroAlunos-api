import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { primaryColor } from '../../Config/colors';

export const ButtonMod = styled(Button)`
    && {
      margin-top: 1rem;
      background: ${primaryColor};
    }
`;
