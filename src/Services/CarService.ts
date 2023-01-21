// import Key from '../Domain/Key/Key';
// import KeyFactory from '../Domain/Key/KeyFactory';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarsService {
  private createCarDomain(carData: ICar | null): Car | null {
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

  public async register(carData: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(carData) as ICar;
    console.log(newCar);
    return this.createCarDomain(newCar);
    // return this.createKeyDomain(newCar);
  }

  // public async getByValue(value: string) {
  //   const carODM = new CarODM();
  //   const key = await carODM.findByValue(value);
  //   return this.createKeyDomain(key);
  // }
}

export default CarsService;
