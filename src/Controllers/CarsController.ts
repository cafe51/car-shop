import {
  NextFunction,
  Request,
  Response,
} from 'express';

import ICar from '../Interfaces/ICar';

import CarService from '../Services/CarService';

class CarsController {
  // private req: Request;
  // private res: Response;
  // private next: NextFunction;
  private service: CarService;

  constructor(/* req: Request, res: Response, next: NextFunction */) {
    // this.req = req;
    // this.res = res;
    // this.next = next;
    this.service = new CarService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    } = req.body;

    const car: ICar = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };

    try {
      const newCar = await this.service.register(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { string } = req.params;
      console.log(string);
      const allCars = await this.service.findAll();
      return res.status(200).json(allCars);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (id.length !== 24) {
        return res.status(422).json({ message: 'Invalid mongo id' });
      }

      const car = await this.service.findById(id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  };
}

export default CarsController;
