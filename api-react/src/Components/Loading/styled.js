import styled from 'styled-components';
import * as colors from '../../Config/colors';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  div{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${colors.primaryDarkColor};
  }

  .progressStyle{
    z-index: 2;
    color: ${colors.primaryColor};
  }
`;
