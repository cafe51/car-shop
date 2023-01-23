import express from 'express';
import vehicleRouter from './Routes/vehicleRouter';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(vehicleRouter);
app.use(ErrorHandler.handle);

export default app;
