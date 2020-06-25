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
    this.speed = 0;
    this.isOn = false;
    return;
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
      this.speed = value;
    }
    return this.speed;
  }

  decelerate(value) {
    let newSpeed = this.speed - value;
    if (newSpeed > 0) {
      this.speed = newSpeed;
    }
    return this.speed;
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
    return this.distance;
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
