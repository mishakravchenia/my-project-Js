class Vehicle {
  constructor(dimension, brand, model, manufactureDate) {
    this.dimension = dimension;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate = new Date(manufactureDate);
  }

  get ageAuto() {
    let ageAuto = new Date() - this.manufactureDate;
    return ageAuto;
  }

  getFullinfo() {
    return `Information бренд: ${this.brand}, модель:${this.model} вік:${this.ageAuto} `;
  }
}
const vehicle = new Vehicle(
  { length: 4, width: 2.0, height: 1.5 },
  "Renault",
  "Master",
  "2017-02-15"
);
console.log(vehicle.ageAuto);
console.log(vehicle.getFullinfo());

class PassengerTransport extends Vehicle {
  constructor(
    dimension,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimension, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
    }
  }
  getFullinfo() {
    return `Information бренд: ${this.brand}, модель: ${this.model}, вік: ${this.ageAuto} , максимальна кількість пасажирських місць: ${this.passengerLimit}`;
  }
}

const passengerTransport = new PassengerTransport(
  { length: 4, width: 2.0, height: 1.5 },
  "Renault",
  "Master",
  "2017-02-15",
  50
);
console.log(passengerTransport);
console.log(passengerTransport.getFullinfo());
