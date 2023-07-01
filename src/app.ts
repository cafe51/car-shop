/* eslint-disable max-len */
import express from 'express';
import vehicleRouter from './Routes/vehicleRouter';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    instruções: 'A api está pronta para uso! Siga a documentação da api para conhecer os endpoints',
    documentação: 'https://github.com/cafe51/car-shop',
  });
});

app.use(express.json());
app.use(vehicleRouter);
app.use(ErrorHandler.handle);

export default app;
