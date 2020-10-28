import React from 'react';
import { Switch } from 'react-router-dom';


import MyRoute from './MyRoute';

import Aluno from '../Pages/Aluno';
import ListAlunos from '../Pages/ListAlunos';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Photos from '../Pages/Photos';
import Page404 from '../Pages/Page404';

export default function Routes() {

  return (
    <Switch>
      <MyRoute exact path="/" component={ListAlunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Photos} isClosed />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
