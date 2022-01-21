"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    //Constructor
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements[i] = Math.round(Math.random() * k);
        }
    }
    //get
    Vector.prototype.getElement = function () {
        return this.elements;
    };
    Vector.prototype.setElement = function (element) {
        this.elements = element;
    };
    //Metodos
    Vector.prototype.add = function (v1) {
        var array;
        array = [];
        for (var i = 0; i < this.elements.length; i++) {
            array[i] = v1.getElement()[i] + this.elements[i];
        }
        v1.setElement(array);
        return v1;
    };
    Vector.prototype.subs = function (v1) {
        var array;
        array = [];
        var vectorSubs = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            array[i] = this.elements[i] - v1.getElement()[i];
        }
        vectorSubs.setElement(array);
        return vectorSubs;
    };
    Vector.prototype.mult = function (v1) {
        var array;
        array = [];
        var vectorMult = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            array[i] = v1.getElement()[i] * this.elements[i];
        }
        vectorMult.setElement(array);
        return vectorMult;
    };
    Vector.prototype.multNumber = function (n) {
        var vectorX = new Vector(2, 2);
        var array;
        array = [];
        vectorX.setElement(array);
        for (var i = 0; i < this.elements.length; i++) {
            array[i] = this.elements[i] * n;
        }
        return vectorX;
    };
    return Vector;
}());
exports.Vector = Vector;
