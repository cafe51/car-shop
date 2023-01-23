import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(MotorcycleObject: IMotorcycle) {
    super(MotorcycleObject);
    this.category = MotorcycleObject.category;
    this.engineCapacity = MotorcycleObject.engineCapacity;
  }
}

export default Motorcycle;
