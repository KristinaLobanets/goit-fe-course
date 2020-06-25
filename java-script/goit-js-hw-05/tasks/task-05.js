"use strict";

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {
    console.log(
      `MaxSpeed: ${car.maxSpeed}, Speed: ${car.speed}, IsOn: ${car.isOn}, Distance ${car.distance}, Prise: ${car.price}`
    );
  }

  get onePrice() {
    return this._prise;
  }

  set onePrice(price) {
    this._price = price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.speed = 0), (this.isOn = false);
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
      return (this.speed = value);
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed = this.speed - value);
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
Car.getSpecs(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
