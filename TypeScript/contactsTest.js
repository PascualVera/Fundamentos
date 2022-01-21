"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var contacts = new contacts_1.Contacts();
contacts.people[0] = new person_1.Person("Jose", 2052, "Belén");
contacts.people[1] = new person_1.Person("Maria", 2050, "Nazaret");
contacts.printContacts();
