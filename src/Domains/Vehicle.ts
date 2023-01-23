import IVehicle from '../Interfaces/IVehicle';

abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean = false;
  protected buyValue: number;

  constructor(carObject: IVehicle) {
    if (carObject.id) this.id = carObject.id;
    this.model = carObject.model;
    this.year = carObject.year;
    this.color = carObject.color;
    if (carObject.status) this.status = carObject.status;
    this.buyValue = carObject.buyValue;
  }
}

export default Vehicle;
