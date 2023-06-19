/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config();

import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import { logger } from '../../providers/logger/implementations/LoggerProvider';
import { getErrors } from '../errors/getErrors';
import { routes } from './routes';

import '../../containers';
import '../database';

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(getErrors);

app.listen(4444, () => {
  logger.info('Server started on port 4444');
});
