let { Contacts: Contacts } = require("./contacts");
let { Person: Person } = require("./person");
let contact = new Contacts();
contact.personas[0] = new Person();
contact.personas[1] = new Person();
contact.printPersons();
