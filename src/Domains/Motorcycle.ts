import IMotorcycle from '../Interfaces/IMotorcycle';
// import IValid from '../../Interfaces/IValid';
// import KeyTypes from '../../utils/KeyTypes';

class Motorcycle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean = false;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(MotorcycleObject: IMotorcycle) {
    if (MotorcycleObject.id) this.id = MotorcycleObject.id;
    this.model = MotorcycleObject.model;
    this.year = MotorcycleObject.year;
    this.color = MotorcycleObject.color;
    if (MotorcycleObject.status) this.status = MotorcycleObject.status;
    this.buyValue = MotorcycleObject.buyValue;
    this.category = MotorcycleObject.category;
    this.engineCapacity = MotorcycleObject.engineCapacity;
  }

  // isValid(value: string): boolean {
  //   const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  //   return regex.test(value);
  // }
}

export default Motorcycle;
