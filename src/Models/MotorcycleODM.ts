import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
import IVehicle from '../Interfaces/IVehicle';

class MotorcycleODM extends AbstractODM<IVehicle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycles');
  }

  // public async findAll(): Promise<IMotorcycle[] | null> {
  //   return this.model.find();
  // }

  // public async findByValue(value: string): Promise<IMotorcycle | null> {
  //   return this.model.findOne({ value });
  // }
}

export default MotorcycleODM;
