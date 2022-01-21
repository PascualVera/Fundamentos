"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    //Cosntructor
    function Mobile(name, model, trademark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5g = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //Getters and Setters
    //Getters
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5g = function () {
        return this.is5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //Setters
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5g = function (is5g) {
        this.is5g = is5g;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    //Public metods
    Mobile.prototype.printAll = function () {
        var specs = "The characteristics of the mobile ".concat(this.name, " are:\n      Name: ").concat(this.name, "\n      Model: ").concat(this.model, "\n      Trademark: ").concat(this.trademark, "\n      SD Size (GB): ").concat(this.sdSize, "\n      Color: ").concat(this.color, "\n      Is 5g?: ").concat(this.is5g, "\n      Number of Cameras: ").concat(this.cameraNumber);
        console.log(specs);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
