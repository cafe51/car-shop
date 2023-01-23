import {
  NextFunction,
  Request,
  Response,
} from 'express';

// import ICar from '../Interfaces/ICar';

import VehicleService from '../Services/VehicleService';

class VehicleController {
  ID_NOT_FOUND = 'Invalid mongo id';

  vehicleNotFoundMessage = (vehicleName: string) => 
    ({
      message: `${vehicleName
        .charAt(0)
        .toUpperCase() + vehicleName.slice(1, -1)} not found`,
    }); 

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newVehicle = await new VehicleService(req.params.vehicleType)
        .register(req.body);
      return res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allVehicles = await new VehicleService(req.params.vehicleType).findAll();
      return res.status(200).json(allVehicles);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { vehicleType, id } = req.params;
      if (id.length !== 24) {
        return res.status(422).json({ message: this.ID_NOT_FOUND });
      }

      const car = await new VehicleService(vehicleType).findById(id);
      if (!car) {
        return res.status(404)
          .json(this.vehicleNotFoundMessage(vehicleType));
      }

      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { vehicleType, id } = req.params;
    if (id.length !== 24) {
      return res.status(422).json({ message: this.ID_NOT_FOUND });
    }
    const { body } = req;
    try {
      const updatedVehicle = await new VehicleService(vehicleType).update(id, body);
      if (!updatedVehicle) {
        return res.status(404)
          .json(this.vehicleNotFoundMessage(vehicleType));
      }
      return res.status(200).json(updatedVehicle);
    } catch (error) {
      next(error);
    }
  };

  deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const { vehicleType, id } = req.params;
    if (id.length !== 24) {
      return res.status(422).json({ message: this.ID_NOT_FOUND });
    }
    try {
      const deletedVehicle = await new VehicleService(vehicleType).findById(id);
      if (!deletedVehicle) {
        return res.status(404)
          .json(this.vehicleNotFoundMessage(vehicleType));
      }
      await new VehicleService(vehicleType).deleteById(id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  };
}

export default VehicleController;
