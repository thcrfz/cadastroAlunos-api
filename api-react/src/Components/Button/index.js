import React from 'react';
import {ButtonMod} from './styled';

export default function ButtonStyled(props){
  const {
    description,
  } = props;

  return(
    <ButtonMod type="submit" variant="contained" color="primary" size="medium" >{description}</ButtonMod>
  );
}
