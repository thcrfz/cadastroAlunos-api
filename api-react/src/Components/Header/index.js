import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import SettingsPowerRoundedIcon from '@material-ui/icons/SettingsPowerRounded';

import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav, ButtonsContainer, LinkTo } from './styled';

export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const nome = useSelector(state => state.auth.user.nome);

  const dispatch = useDispatch();

  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }
  return (
    <Nav >
       {isLoggedIn &&
       <div className="userNameStatus">
        <FiberManualRecordRoundedIcon className="userStatus"/>
        <span>{`Olá, ${nome}`}</span>
       </div>
       }

      <ButtonsContainer>
        <LinkTo to="/">
          <HomeRoundedIcon/>
          Home
        </LinkTo>

        {isLoggedIn &&
          <LinkTo className="newUser" to="/register/">
            <PersonAddRoundedIcon/>
            {'Editar usuário'}
          </LinkTo>
        }


        {isLoggedIn ? (
          <LinkTo className="login" onClick={handleLogout}>
            <SettingsPowerRoundedIcon/>
            Sair
          </LinkTo>
        ) : (
          <LinkTo className="login" to="/login/">
            <ExitToAppRoundedIcon/>
            Entrar
          </LinkTo>
        )}
      </ButtonsContainer>
    </Nav>
  );
}
