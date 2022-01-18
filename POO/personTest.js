let { Person: Person } = require("./person");

let pascual = new Person(62, 169);
pascual.nombre = "Pascual";
pascual.apellidos = "Vera Herrera";
pascual.colorOjos = "Verdes";
pascual.dinero = "Poco";
pascual.yearOfBirth = 1994;
pascual.hobbits = ["Frodo", "Sam", "Thobold Corneta", "Bandobras Tuk"];

//3.-
console.log("La edad es " + pascual.edad(2022));
//4.-
console.log(pascual.printAll(pascual));
//5.-
pascual.printHobbits();
