import * as express from 'express';
import VehicleController from '../Controllers/VehicleController';

const carsRouter = express.Router();

const vehicleController: VehicleController = new VehicleController();

carsRouter.post('/:string/', vehicleController.create);

carsRouter.get('/:string/', vehicleController.findAll);

carsRouter.get('/:string/:id', vehicleController.findById);

export default carsRouter;
