import React, {useState, useEffect} from 'react';
import { InputLabel, Input, FormHelperText, FormControl} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {isEmail, isInt, isFloat } from 'validator';
import {get} from 'lodash';
import PropTypes from 'prop-types';
import {useDispatch } from 'react-redux';

import { Container } from '../../Styles/GlobalStyles';
import { Form, ButtonGroup, BackLink } from './styled';
import ButtonStyled from '../../Components/Button';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({match}) {
  const id = get(match, 'params.id', 0);
  const dispatch = useDispatch();
  const descriptionButton = {description: `${id ? "Salvar" : "Criar" }`};

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;
    async function getData(){
      try {
        setIsLoading(true);
        const {data} = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if(status === 400) errors.map(error => toast.error(error));
        history.push('/');
      }
    }

    getData();
  },[id])

  async function handleSubmit(e) {
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
    if(!isInt(String(idade))){
      formErrors = true;
      toast.error('Idade precisa ser um número inteiro.');
    }
    if(!isFloat(String(peso))){
      formErrors = true;
      toast.error('Peso precisa ser um número inteiro ou de ponto flutuante.');
    }
    if(!isFloat(String(altura))){
      formErrors = true;
      toast.error('Altura precisa ser um número inteiro ou de ponto flutuante.');
    }

    if(formErrors) return;

    try{
      if(id) {
        await axios.put(`/alunos/${id}`,{
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura
        });
        toast.success('Aluno(a) editado(a) com sucesso.')
      } else {
        const {data} = await axios.post(`/alunos`,{
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura
        });
        toast.success('Aluno(a) criado(a) com sucesso.');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    }catch(err){
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if(errors.length > 0) {
        errors.map(error => toast.error(error));
      } else {
        toast.error('Error desconhecido');
      }

      if(status === 401) dispatch(actions.loginFailure())
    }
  }

   return (
    <Container>
      <Loading isLoading={isLoading}/>
      <h1>{id ? "Editar aluno": "Cadastrar aluno"}</h1>
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
          <InputLabel htmlFor="surname">Sobrenome</InputLabel>
          <Input
            type="text"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
            aria-describedby="sobrenom-input"
          />
          <FormHelperText>Nunca iremos compartilhar seu email.</FormHelperText>
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
          <InputLabel htmlFor="idade">Idade</InputLabel>
          <Input
            type="number"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            aria-describedby="idade-input"
          />
          <FormHelperText>Nunca iremos compartilhar seu email.</FormHelperText>
        </FormControl>

        <FormControl className="form-control">
          <InputLabel htmlFor="peso">Peso</InputLabel>
          <Input
            type="float"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            aria-describedby="email-input"
          />
          <FormHelperText>Nunca iremos compartilhar seu email.</FormHelperText>
        </FormControl>

        <FormControl className="form-control">
          <InputLabel htmlFor="altura">Altura</InputLabel>
          <Input
            type="float"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            aria-describedby="email-input"
          />
          <FormHelperText>Nunca iremos compartilhar seu email.</FormHelperText>
        </FormControl>

        <ButtonGroup>
          <ButtonStyled {...descriptionButton}/>
          <BackLink to="/"><ArrowBackIcon/>Voltar</BackLink>
        </ButtonGroup>
</Form>
    </Container>

  );
}

Aluno.propType = {
  match: PropTypes.shape({}).isRequired,
}
