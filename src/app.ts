import express from 'express';
import carsRouter from './Routes/carRouter';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(ErrorHandler.handle);

export default app;
