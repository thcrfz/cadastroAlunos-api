import React, {useState} from 'react';

import { Container } from '../../Styles/GlobalStyles';
import { Form } from './styled';
import ButtonStyled from '../../Components/Button';
import Loading from '../../Components/Loading';
import * as actions from '../../store/modules/auth/actions';

import { InputLabel, Input, FormHelperText, FormControl} from '@material-ui/core'
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

export default function Register() {

  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.user.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const descriptionButton = {description: `${id ? "Salvar" : "Criar conta" }`};

  React.useEffect(() => {
    if(!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres.');
    }
    if(!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido.');
    }
    if(!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres.');
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({nome, email, password, id}));

  }

  return (
    <Container>
      <Loading isLoading={isLoading}/>

      <h1>{id ? `Editar dados`:`Crie sua conta`}</h1>

    <Form onSubmit={handleSubmit}>

      <FormControl className="form-control">
        <InputLabel htmlFor="nome">Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          aria-describedby="name-input"
        />
        <FormHelperText>Crie uma nome entre 3 e 255 caracteres.</FormHelperText>
      </FormControl>

      <FormControl className="form-control">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby="email-input"
        />
        <FormHelperText>Nunca iremos compartilhar seu email.</FormHelperText>
      </FormControl>

      <FormControl className="form-control">
        <InputLabel htmlFor="senha">Senha</InputLabel>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby="senha-input"
        />
        <FormHelperText>Crie uma senha entre 6 e 50 caracteres.</FormHelperText>
      </FormControl>

      <ButtonStyled {...descriptionButton}/>

    </Form>
    </Container>
  );
}
