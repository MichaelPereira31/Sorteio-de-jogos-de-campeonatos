import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import { logger } from '../../providers/logger/implementations/LoggerProvider';
import { getErrors } from '../errors/getErrors';
import { routes } from './route';

import '../../containers';
import '../database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(getErrors);

app.listen(4444, () => {
  logger.info('Server started on port 4444');
});
