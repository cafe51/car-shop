import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ICar from '../Interfaces/ICar';
// import CarODM from '../Models/CarODM';

class VehicleDomainFactory {
  static createCarDomain(carData: ICar | null): Car | null {
    if (carData) {
      const car: ICar = {
        id: carData.id,
        model: carData.model,
        year: carData.year,
        color: carData.color,
        status: carData.status,
        buyValue: carData.buyValue,
        doorsQty: carData.doorsQty,
        seatsQty: carData.seatsQty,
      };
      return new Car(car);
    }
    return null;
  }

  static createMotorcycleDomain(motorcycleData: IMotorcycle | null): Motorcycle | null {
    if (motorcycleData) {
      const motorcycle: IMotorcycle = {
        id: motorcycleData.id,
        model: motorcycleData.model,
        year: motorcycleData.year,
        color: motorcycleData.color,
        status: motorcycleData.status,
        buyValue: motorcycleData.buyValue,
        category: motorcycleData.category,
        engineCapacity: motorcycleData.engineCapacity,
      };
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  static createVehicleDomain(type: string, vehicleData: any) {
    if (type === 'cars') {
      return this.createCarDomain(vehicleData);
    }
    if (type === 'motorcycles') {
      return this.createMotorcycleDomain(vehicleData);
    }
  }
}

export default VehicleDomainFactory;
