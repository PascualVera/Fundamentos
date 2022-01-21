"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    //Constructor
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    //getters and setters
    Triangulo.prototype.getVertice1 = function () {
        return this.vertice1;
    };
    Triangulo.prototype.getVertice2 = function () {
        return this.vertice2;
    };
    Triangulo.prototype.getVertice3 = function () {
        return this.vertice3;
    };
    //Metodos publicos
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudLados = [];
        longitudLados[0] = this.vertice1.calcularDistancia(this.vertice2);
        longitudLados[1] = this.vertice2.calcularDistancia(this.vertice3);
        longitudLados[2] = this.vertice3.calcularDistancia(this.vertice1);
        return longitudLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
