import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import SettingsPowerRoundedIcon from '@material-ui/icons/SettingsPowerRounded';
import {useSelector, useDispatch} from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Link } from 'react-router-dom';
import { Nav } from './styled';
import { Container } from '@material-ui/core';


export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const id = useSelector(state => state.auth.user.id);
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

      <div className="buttonsContainer">
        <Link className="home" to="/">
          <HomeRoundedIcon/>
          Home
        </Link>
        <Link className="newUser" to="/register/">
          <PersonAddRoundedIcon/>
          {id ? `Editar`:`Novo`}
        </Link>

        {isLoggedIn ? (
          <Link className="login" onClick={handleLogout}>
            <SettingsPowerRoundedIcon/>
            Sair
          </Link>
        ) : (
          <Link className="login" to="/login/">
            <ExitToAppRoundedIcon/>
            Entrar
          </Link>
        )}

      </div>
    </Nav>
  );
}
