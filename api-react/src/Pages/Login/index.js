import React, {useState} from 'react';
import { InputLabel, Input, FormHelperText, FormControl} from '@material-ui/core';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/GlobalStyles';
import { Form } from './styled';
import ButtonStyled from '../../Components/Button';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../Components/Loading';

export default function Login(props) {

  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/')

  const descriptionButton = {description: "Entrar"};

  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 function handleSubmit(e){
    e.preventDefault();
    let formErrors = false;

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido.');
    }
    if(password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida.');
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({email, password, prevPath}));
  }

  return (
    <Container>
      <Loading isLoading={isLoading}/>
      <h1>Faça seu login</h1>
      <Form onSubmit={handleSubmit}>

        <FormControl className="form-control">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-describedby="name-input"
            />
          <FormHelperText>Insira seu Email.</FormHelperText>
        </FormControl>

        <FormControl className="form-control">
          <InputLabel htmlFor="password">Senha</InputLabel>
          <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby="email-input"
          />
          <FormHelperText>Insira sua senha.</FormHelperText>
        </FormControl>

      <ButtonStyled {...descriptionButton}/>
      </Form>
    </Container>
    );
  }
