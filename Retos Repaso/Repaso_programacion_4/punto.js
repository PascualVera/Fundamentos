"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    //Constructor
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    //getters and setters
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    //Metodos publicos
    Punto.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var origen = 0;
        origen = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        return Math.sqrt(origen);
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var puntoOrigen = 0;
        puntoOrigen =
            Math.pow((this.x - otroPunto.getX()), 2) + Math.pow((this.y - otroPunto.getY()), 2);
        return Math.sqrt(puntoOrigen);
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x > 0 && this.y > 0) {
            cuadrante += 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante += 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante += 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante += 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var temporal = puntos[0];
        for (var i = 0; i < puntos.length - 1; i++) {
            if (this.calcularDistancia(puntos[i]) < this.calcularDistancia(temporal)) {
                temporal = puntos[i];
            }
        }
        return temporal;
    };
    return Punto;
}());
exports.Punto = Punto;
