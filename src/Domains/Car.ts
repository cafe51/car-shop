import ICar from '../Interfaces/ICar';
// import IValid from '../../Interfaces/IValid';
// import KeyTypes from '../../utils/KeyTypes';

class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean = false;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carObject: ICar) {
    // if (!this.isValid(value)) throw Error('Invalid Key');
    if (carObject.id) this.id = carObject.id;
    this.model = carObject.model;
    this.year = carObject.year;
    this.color = carObject.color;
    if (carObject.status) this.status = carObject.status;
    this.buyValue = carObject.buyValue;
    this.doorsQty = carObject.doorsQty;
    this.seatsQty = carObject.seatsQty;
  }

  // isValid(value: string): boolean {
  //   const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  //   return regex.test(value);
  // }
}

export default Car;
