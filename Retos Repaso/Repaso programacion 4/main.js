"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
//Main
//Puntos
var coordenada1 = new punto_1.Punto(4, 3);
var coordenada2 = new punto_1.Punto(5, 3);
var coor1 = new punto_1.Punto(2, 2);
var coor2 = new punto_1.Punto(1, 2);
var coor3 = new punto_1.Punto(2, 4);
var coor4 = new punto_1.Punto(9, 1);
//Pruebas punto
console.log(coordenada1.toString());
console.log(coordenada2.calcularDistancia(coordenada1));
console.log(coordenada1.calcularCuadrante());
console.log(coordenada1.calcularMasCercano([coor1, coor2, coor3, coor4]));
//Triangulo
var triangulo = new triangulo_1.Triangulo(coor1, coor2, coor3);
console.log(triangulo.calcularLongitudLados());
