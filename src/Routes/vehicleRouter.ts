import * as express from 'express';
import VehicleController from '../Controllers/VehicleController';

const vehicleRouter = express.Router();

const vehicleController: VehicleController = new VehicleController();

vehicleRouter.post('/:vehicleType/', vehicleController.create);

vehicleRouter.get('/:vehicleType/', vehicleController.findAll);

vehicleRouter.get('/:vehicleType/:id', vehicleController.findById);

vehicleRouter.put('/:vehicleType/:id', vehicleController.update);

vehicleRouter.delete('/vehicleType/:id', vehicleController.deleteById);

export default vehicleRouter;
