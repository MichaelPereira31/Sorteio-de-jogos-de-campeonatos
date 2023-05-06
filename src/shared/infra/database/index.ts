import mongoose from 'mongoose';

import { logger } from '../../providers/logger/implementations/LoggerProvider';

mongoose
  .connect((process.env.MONGO_URI as string) || 'mongodb://127.0.0.1:27017/api')
  .then(() => {
    logger.info('Mongo connected');
  })
  .catch(e => {
    logger.info(`Mongo disconnected: ${e.message}`);
  });
