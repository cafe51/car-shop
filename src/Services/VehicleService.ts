import VehicleDomainFactory from './VehicleDomainFactory';
import VehicleFactoryODM from '../Models/VehicleFactoryODM';
// import ICar from '../Interfaces/ICar';
// import CarODM from '../Models/CarODM';

class VehicleService {
  vehicleFactoryODM: VehicleFactoryODM;
  // type: string;

  constructor(public type: string) {
    this.type = type;
    this.vehicleFactoryODM = new VehicleFactoryODM(type);
  }

  public async register(carData: any) {
    const vehicleODM = this.vehicleFactoryODM.generateODM();
    if (!vehicleODM) return null;
    
    const newVehicle = await vehicleODM.create(carData);
    return VehicleDomainFactory.createVehicleDomain(this.type, newVehicle);
  }

  public async findAll() {
    const vehicleODM = this.vehicleFactoryODM.generateODM();
    if (!vehicleODM) return null;

    const vehicles = await vehicleODM.findAll();
    if (!vehicles) return null; 

    const allVehicles = await Promise
      .all(vehicles.map((veh) => VehicleDomainFactory.createVehicleDomain(this.type, veh)));
      
    return allVehicles;
  }

  public async findById(id: string) {
    const vehicleODM = this.vehicleFactoryODM.generateODM();
    if (!vehicleODM) return null;
    const vehicle = await vehicleODM.findById(id);
    return VehicleDomainFactory.createVehicleDomain(this.type, vehicle);
  }
}

export default VehicleService;
