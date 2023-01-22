// import Key from '../Domain/Key/Key';
// import KeyFactory from '../Domain/Key/KeyFactory';
// import Car from '../Domains/Car';
import VehicleDomainFactory from './VehicleDomainFactory';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarsService {
  public async register(type: string, carData: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(carData) as ICar;
    return VehicleDomainFactory.createVehicleDomain(type, newCar);
  }

  public async findAll(type: string) {
    const carODM = new CarODM();
    const odmCars = await carODM.findAll();

    if (odmCars) {
      const allCars = await Promise
        .all(odmCars.map((car) => VehicleDomainFactory.createVehicleDomain(type, car)));
      return allCars;
    }
    return null;
  }

  public async findById(type: string, id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return VehicleDomainFactory.createVehicleDomain(type, car);
  }
}

export default CarsService;
