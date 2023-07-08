import * as express from 'express';
import VehicleController from '../Controllers/VehicleController';

const BY_TYPE = '/:vehicleType/:id';

const vehicleRouter = express.Router();

const vehicleController: VehicleController = new VehicleController();

vehicleRouter.post('/:vehicleType/', vehicleController.create);

vehicleRouter.get('/:vehicleType/', vehicleController.findAll);

vehicleRouter.get(BY_TYPE, vehicleController.findById);

vehicleRouter.put(BY_TYPE, vehicleController.update);

vehicleRouter.delete(BY_TYPE, vehicleController.deleteById);

export default vehicleRouter;
