import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToDb } from './db';
import { productRouter } from './routes/product.route';

const server = async () => {
  const PORT = process.env.PORT || 5000;
  const CLIENT_URL = 'http://localhost:3000';
  const app = express();

  app.use(
    cors({
      origin: [CLIENT_URL, 'https://fe-oct23-team3.github.io'],
    }),
  );

  app.use('/products', express.json(), productRouter);

  await connectToDb();

  app.listen(PORT, () =>
    console.log(`API is ready on http://localhost:${PORT}`),
  );
};

server();
