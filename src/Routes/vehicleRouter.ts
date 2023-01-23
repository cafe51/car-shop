import * as express from 'express';
import VehicleController from '../Controllers/VehicleController';

const vehicleRouter = express.Router();

const vehicleController: VehicleController = new VehicleController();

vehicleRouter.post('/:string/', vehicleController.create);

vehicleRouter.get('/:string/', vehicleController.findAll);

vehicleRouter.get('/:string/:id', vehicleController.findById);

vehicleRouter.put('/:string/:id', vehicleController.update);

export default vehicleRouter;
