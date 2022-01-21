"use strict";
exports.__esModule = true;
var vectores_1 = require("./vectores");
var vector1 = new vectores_1.Vector(2, 1);
var vector2 = new vectores_1.Vector(2, 1000);
console.log(vector1.add(vector2));
console.log(vector1.subs(vector2));
console.log(vector1.mult(vector2));
console.log(vector1.multNumber(10));
