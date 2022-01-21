import { Mobile } from "./mobile";

let nokia3210: Mobile;
let iPhone3g: Mobile;
let SamsungGalaxy10: Mobile;

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
iPhone3g = new Mobile("iPhone 3", "3g", "Apple", "8gb", "Grey", false, 1, 100);

SamsungGalaxy10 = new Mobile(
  "Samsung Galaxy",
  "10",
  "Samsung",
  "512 gb",
  "Red",
  true,
  4,
  600
);
//Mostrar atributos
for (const atributos in nokia3210) {
  if (typeof nokia3210[atributos] != "function") {
    console.log(atributos + ": " + nokia3210[atributos]);
  }
}
for (const atributos in iPhone3g) {
  if (typeof iPhone3g[atributos] != "function") {
    console.log(atributos + ": " + iPhone3g[atributos]);
  }
}
for (const atributos in SamsungGalaxy10) {
  if (typeof SamsungGalaxy10[atributos] != "function") {
    console.log(atributos + ": " + SamsungGalaxy10[atributos]);
  }
}
//Modificar atributos
nokia3210.setIs5g(true);
nokia3210.setCameraNumber(4);
//Mostrar atributos de todos los objetos
const collection: Mobile[] = [nokia3210, SamsungGalaxy10, iPhone3g];

for (const mobile of collection) {
  console.log("");
  mobile.printAll();
}

//Punto 8
for (const mobile of collection) {
  console.log("");
  mobile.printAll();
}
