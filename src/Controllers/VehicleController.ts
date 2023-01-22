import {
  NextFunction,
  Request,
  Response,
} from 'express';

// import ICar from '../Interfaces/ICar';

import VehicleService from '../Services/VehicleService';

class VehicleController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(req.body);
      const newVehicle = await new VehicleService(req.params.string)
        .register(req.body);
      return res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allVehicles = await new VehicleService(req.params.string).findAll();
      return res.status(200).json(allVehicles);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { string } = req.params;
      const { id } = req.params;
      if (id.length !== 24) {
        return res.status(422).json({ message: 'Invalid mongo id' });
      }

      const car = await new VehicleService(req.params.string).findById(id);
      if (!car) {
        return res.status(404)
          .json({ message: `${string.charAt(0).toUpperCase() + string.slice(1, -1)} not found` });
      }

      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  };
}

export default VehicleController;
