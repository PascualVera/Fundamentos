let { Contacts: Contacts } = require("./contacts");
let { Person: Person } = require("./person");
let contact = new Contacts();
contact.personas[0] = new Person(70, 170);
contact.personas[0].nombre = "Pascual";
contact.personas[0].apellidos = "Vera Herrera";

contact.personas[1] = new Person(120, 200);
contact.personas[1].nombre = "The Rock";
contact.personas[1].apellidos = "A secas";
contact.printPersons();
