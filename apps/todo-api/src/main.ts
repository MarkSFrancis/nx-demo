import * as express from 'express';
import { router as converterRouter } from './app/converter';
import cors from 'cors';

const app = express();

app.use(
  cors({
    credentials: true,
    exposedHeaders: ['Content-Disposition'],
  })
);

app.use('/api/convert', converterRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
