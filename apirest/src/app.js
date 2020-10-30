import dotenv from 'dotenv';

dotenv.config();

import './databases';
import { resolve } from 'path';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import picture from './routes/picture';

const whiteList = [
  'http://localhost:3000',
  'http://34.95.158.147',
  'https://apialuno.life',
  'http://localhost:3001',
  'https://apiescola.netlify.app'
];

const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/pictures', picture);
  }
}

export default new App().app;
