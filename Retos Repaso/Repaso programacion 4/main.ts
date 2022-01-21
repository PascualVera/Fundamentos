import { Punto } from "./punto";
import { Triangulo } from "./triangulo";
//Main

//Puntos
let coordenada1 = new Punto(4, 3);
let coordenada2 = new Punto(5, 3);
let coor1 = new Punto(2, 2);
let coor2 = new Punto(1, 2);
let coor3 = new Punto(2, 4);
let coor4 = new Punto(9, 1);
//Pruebas punto
console.log(coordenada1.toString());
console.log(coordenada2.calcularDistancia(coordenada1));
console.log(coordenada1.calcularCuadrante());
console.log(coordenada1.calcularMasCercano([coor1, coor2, coor3, coor4]));
//Triangulo
let triangulo = new Triangulo(coor1, coor2, coor3);

console.log(triangulo.calcularLongitudLados());
