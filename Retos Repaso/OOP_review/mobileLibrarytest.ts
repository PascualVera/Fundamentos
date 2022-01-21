import { Mobile } from "./mobile";
import { MobileLibrary } from "./mobileLibrary";

//Variables
let nokia3210: Mobile;
let iPhone3g: Mobile;
let SamsungGalaxy10: Mobile;
let xiaomiRedmi4: Mobile;
//Moviles
nokia3210 = new Mobile(
  "Nokia3210",
  "3210",
  "Nokia",
  "32kb",
  "Blue",
  false,
  0,
  1
);
iPhone3g = new Mobile(
  "iPhone 3",
  "3 G",
  "Apple Inc",
  "8gb",
  "Grey",
  false,
  1,
  100
);

SamsungGalaxy10 = new Mobile(
  "Samsung Galaxy",
  "10",
  "Samsung Electronics CO. LTD",
  "512 gb",
  "Red",
  true,
  4,
  600
);

xiaomiRedmi4 = new Mobile(
  "Xiaomi",
  "Redmi Note 4",
  "Xiaomi",
  "32gb",
  "Pink",
  false,
  3,
  90
);

//Main
//Variables
const collection: Mobile[] = [
  nokia3210,
  iPhone3g,
  SamsungGalaxy10,
  xiaomiRedmi4,
];
const collection2: Mobile[] = [iPhone3g, SamsungGalaxy10, xiaomiRedmi4];
let coleccionMoviles: MobileLibrary;
coleccionMoviles = new MobileLibrary("Pascual", "Murcia", collection);

//Pruebas
coleccionMoviles.getName();
coleccionMoviles.getLocation();
coleccionMoviles.getMobiles();
coleccionMoviles.setName("Gandalf");
coleccionMoviles.setLocation("Valinor");
coleccionMoviles.setMobiles(collection2);
coleccionMoviles.printLibrary();
