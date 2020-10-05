import express from 'express';
import moment from 'moment-timezone';
import morgan from 'morgan';
import { useExpressServer } from 'routing-controllers';
import env from './configs/index';
const app = express();

if (env.NODE_ENV === 'prod') {
  // Production Setting
}

useExpressServer(app, {
  controllers: [`${__dirname}/controllers/**`],
  validation: false,
});

morgan.token('date', () => {
  return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
});
morgan.format('myformat', ':remote-addr - :remote-user [:date] ":method :url" :status :res[content-length] - :response-time ms');

export default app;
