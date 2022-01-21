"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
//Variables
var nokia3210;
var iPhone3g;
var SamsungGalaxy10;
var xiaomiRedmi4;
//Moviles
nokia3210 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", "32kb", "Blue", false, 0, 1);
iPhone3g = new mobile_1.Mobile("iPhone 3", "3 G", "Apple Inc", "8gb", "Grey", false, 1, 100);
SamsungGalaxy10 = new mobile_1.Mobile("Samsung Galaxy", "10", "Samsung Electronics CO. LTD", "512 gb", "Red", true, 4, 600);
xiaomiRedmi4 = new mobile_1.Mobile("Xiaomi", "Redmi Note 4", "Xiaomi", "32gb", "Pink", false, 3, 90);
//Main
//Variables
var collection = [
    nokia3210,
    iPhone3g,
    SamsungGalaxy10,
    xiaomiRedmi4,
];
var collection2 = [iPhone3g, SamsungGalaxy10, xiaomiRedmi4];
var coleccionMoviles;
coleccionMoviles = new mobileLibrary_1.MobileLibrary("Pascual", "Murcia", collection);
//Pruebas
coleccionMoviles.getName();
coleccionMoviles.getLocation();
coleccionMoviles.getMobiles();
coleccionMoviles.setName("Gandalf");
coleccionMoviles.setLocation("Valinor");
coleccionMoviles.setMobiles(collection2);
coleccionMoviles.printLibrary();
