"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210;
var iPhone3g;
var SamsungGalaxy10;
nokia3210 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", "32kb", "Blue", false, 0, 1);
iPhone3g = new mobile_1.Mobile("iPhone 3", "3g", "Apple", "8gb", "Grey", false, 1, 100);
SamsungGalaxy10 = new mobile_1.Mobile("Samsung Galaxy", "10", "Samsung", "512 gb", "Red", true, 4, 600);
//Mostrar atributos
for (var atributos in nokia3210) {
    if (typeof nokia3210[atributos] != "function") {
        console.log(atributos + ": " + nokia3210[atributos]);
    }
}
for (var atributos in iPhone3g) {
    if (typeof iPhone3g[atributos] != "function") {
        console.log(atributos + ": " + iPhone3g[atributos]);
    }
}
for (var atributos in SamsungGalaxy10) {
    if (typeof SamsungGalaxy10[atributos] != "function") {
        console.log(atributos + ": " + SamsungGalaxy10[atributos]);
    }
}
//Modificar atributos
nokia3210.setIs5g(true);
nokia3210.setCameraNumber(4);
//Mostrar atributos de todos los objetos
var collection = [nokia3210, SamsungGalaxy10, iPhone3g];
for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
    var mobile = collection_1[_i];
    console.log("");
    mobile.printAll();
}
//Punto 8
for (var _a = 0, collection_2 = collection; _a < collection_2.length; _a++) {
    var mobile = collection_2[_a];
    console.log("");
    mobile.printAll();
}
