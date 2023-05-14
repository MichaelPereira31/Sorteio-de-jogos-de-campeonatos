import mongoose from 'mongoose';

import { logger } from '../../providers/logger/implementations/LoggerProvider';

mongoose
  .connect('mongodb+srv://User:WCB3RR9C76hzGGBp@api.a8oqxkw.mongodb.net/')
  .then(() => {
    logger.info('Mongo connected');
  })
  .catch(e => {
    logger.info(`Mongo disconnected: ${e.message}`);
  });
