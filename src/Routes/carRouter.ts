import * as express from 'express';
import CarsController from '../Controllers/CarsController';

const carsRouter = express.Router();

const carsController: CarsController = new CarsController();

carsRouter.post('/:string/', carsController.create);

carsRouter.get('/:string/', carsController.findAll);

carsRouter.get('/:string/:id', carsController.findById);

export default carsRouter;
