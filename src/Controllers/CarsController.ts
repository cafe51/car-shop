import {
  NextFunction,
  Request,
  Response,
} from 'express';

import ICar from '../Interfaces/ICar';

import CarsService from '../Services/CarService';

class CarsController {
  // private req: Request;
  // private res: Response;
  // private next: NextFunction;
  private service: CarsService;

  constructor(/* req: Request, res: Response, next: NextFunction */) {
    // this.req = req;
    // this.res = res;
    // this.next = next;
    this.service = new CarsService();
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

    // id?: string;
    // model: string;
    // year: number;
    // color: string;
    // status?: boolean;
    // buyValue: number;
    // doorsQty: number;
    // seatsQty: number;

    try {
      const newCar = await this.service.register(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  };

  // public async getByValue() {
  //   const { value } = this.req.params;
  //   const key = await this.service.getByValue(value);
  //   return this.res.status(200).json(key);
  // }
}

export default CarsController;
