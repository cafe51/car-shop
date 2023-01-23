import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carObject: ICar) {
    super(carObject);
    this.doorsQty = carObject.doorsQty;
    this.seatsQty = carObject.seatsQty;
  }
}

export default Car;
