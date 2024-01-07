"use strict";

// Task1
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.full = function () {
    console.log("Name = " + this.name + " " + "age = " + this.age);
  };
}

// Task2
function Car(make, model, yearOfManufacture, numberPlate) {
  this.make = make;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.numberPlate = numberPlate;

  this.assignOwner = function (owner) {
    if (owner.age < 18) {
      console.log("You should be 18");
    } else {
      this.owner = owner;
    }
  };

  this.information = function () {
    console.log(
      " make = " +
        this.make +
        " " +
        " model = " +
        this.model +
        " yearOfManufacture = " +
        this.yearOfManufacture +
        " numberPlate = " +
        this.numberPlate,
    );

    if (this.owner) {
      this.owner.full();
    } else {
      console.log("No owner information available");
    }
  };
}

const exeOne = new Human("Vika", 10);
const exeTwo = new Human("Kate", 10);

const carOne = new Car("Toyota", "Camry", 2019, "1234", exeOne);
const carTwo = new Car("Honda", "Civic", 2020, "5678", exeTwo);

carOne.assignOwner(exeOne);
carTwo.assignOwner(exeTwo);

carOne.information();
carTwo.information();
