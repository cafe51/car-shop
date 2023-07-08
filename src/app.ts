/* eslint-disable max-len */
import express from 'express';
import vehicleRouter from './Routes/vehicleRouter';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({
    instruções: 'A api está pronta para uso! Siga a documentação da api para conhecer os endpoints',
    documentação: 'https://github.com/cafe51/car-shop#documenta%C3%A7%C3%A3o-endpoints',
  });
});

app.use(express.json());
app.use(vehicleRouter);
app.use(ErrorHandler.handle);

export default app;
