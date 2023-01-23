import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';
import IVehicle from '../Interfaces/IVehicle';

class CarODM extends AbstractODM<IVehicle> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Cars');
  }
}

export default CarODM;
