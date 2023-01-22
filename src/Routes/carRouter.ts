import * as express from 'express';
import CarsController from '../Controllers/CarsController';

const carsRouter = express.Router();

const carsController: CarsController = new CarsController();

carsRouter.post('/', carsController.create);

carsRouter.get('/', carsController.findAll);

carsRouter.get('/:id', carsController.findById);

export default carsRouter;
