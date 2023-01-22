import CarODM from './CarODM';
import MotorcycleODM from './MotorcycleODM';

class VehicleFactoryODM {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  generateODM() {
    if (this.type === 'cars') {
      return new CarODM();
    }
    if (this.type === 'motorcycles') {
      return new MotorcycleODM();
    }
    return null;
  }
}

export default VehicleFactoryODM;