"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var pascual = new person_1.Person("Pascual", 27, "1600 Pennsylvania Avenue NW, Washington, DC 20500, EE. UU.");
pascual.printName();
console.log(pascual.yearOfBirth(2021));
pascual.setAddress("Calle Falsa 123");
console.log(pascual.getAddress());
