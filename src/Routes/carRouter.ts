import * as express from 'express';
import CarsController from '../Controllers/CarsController';

const carsRouter = express.Router();

const carsController: CarsController = new CarsController();

carsRouter.post('/', carsController.create);

export default carsRouter;
