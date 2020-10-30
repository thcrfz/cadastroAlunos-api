import React, {useState} from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Container } from '../../Styles/GlobalStyles';
import {AlunoContainer, ProfilePicture, TitleContainer, EditButton, NewButton} from './styled';
import axios from '../../services/axios';
import Loading from '../../Components/Loading';
import {useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function ListAlunos() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openId, setOpenId] = useState(null);

  const handleClickOpenId = (id) => {
    setOpenId(id);
  };

  const handleClose = () => {
    setOpenId(false);
  };

  React.useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDelete = async(e, id, index) => {
    e.persist();
    try{
      await axios.delete(`alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
    } catch(err){
      const status= get(err, 'response.status', []);
      if(status === 401){
        toast.error('Você precisa fazer um login para editar.');
      }else{
        toast.error('Ocorreu um erro ao excluir o aluno.')
      }
    }
    setOpenId(false);
  }

  return (
    <Container>
      <Loading isLoading={isLoading}/>
      <TitleContainer>
      <h1>Alunos</h1>
      {isLoggedIn &&

        <NewButton to="/aluno">
          <AddCircleRoundedIcon/>
          Novo Aluno
        </NewButton>
      }
        </TitleContainer>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
        <Accordion key={String(aluno.id)}>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon/> }
            className="summaryDetail"
          >
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', '', false ) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaceRoundedIcon size={36} />
              )}
            </ProfilePicture>

            <span>ID: {aluno.id}</span>
            <span>Nome: {aluno.nome}</span>

          </AccordionSummary>

            <AccordionDetails
              className="containerInfo"
            >

              <span>{aluno.nome} {aluno.sobrenome}</span>
              <span>{aluno.email}</span>
              <span>Idade: {aluno.idade}</span>
              <span>Peso: {aluno.peso}</span>
              <span>Altura: {aluno.altura}</span>

              {isLoggedIn &&
                <ButtonGroup clasname="buttonGroup">
                  <EditButton to={`aluno/${aluno.id}/edit`}>
                    <EditRoundedIcon></EditRoundedIcon>
                  </EditButton>
                  <Button
                    onClick={()=>handleClickOpenId(aluno.id)}
                    variant="contained"
                    size="small"
                    color="secondary"
                    startIcon={<DeleteRoundedIcon/>}/>
                </ButtonGroup>
              }
              <Dialog
                open={openId === aluno.id}
                onClose={handleClose}
              >
                <DialogTitle >{"Excluir aluno"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText >
                      Tem certeza que você deseja excluir este aluno?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">
                    NÃO
                    </Button>
                    <Button onClick={e => handleDelete(e, aluno.id, index)} variant="contained" color="secondary" autoFocus>
                      SIM
                    </Button>
                  </DialogActions>
                </Dialog>
            </AccordionDetails>

          </Accordion>
        ))}
      </AlunoContainer>
    </Container>
  );
}
