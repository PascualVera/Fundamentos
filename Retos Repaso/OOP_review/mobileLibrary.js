"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    //Contstructor
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation(mobiles);
    }
    //setters and getters
    //getters
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    //setters
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation(mobiles);
    };
    MobileLibrary.prototype.setTotalPrice = function (price) {
        this.totalPrice = price;
    };
    //Metodos privados
    MobileLibrary.prototype.totalPriceCalculation = function (moviles) {
        var total = 0;
        for (var _i = 0, moviles_1 = moviles; _i < moviles_1.length; _i++) {
            var mobiles = moviles_1[_i];
            total += mobiles.getPrice();
        }
        return total;
    };
    //Metodo publico
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This are all my mobiles:" + "\n");
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var moviles = _a[_i];
            "The characteristics of the mobile" + moviles.getName() + "are:" + "\n";
            moviles.printAll();
            console.log("");
        }
        console.log("Price overall: " + this.totalPrice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
