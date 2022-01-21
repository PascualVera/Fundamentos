import { Person } from "./person";
import { Contacts } from "./contacts";
let contacts = new Contacts();
contacts.people[0] = new Person("Jose", 2052, "Belén");
contacts.people[1] = new Person("Maria", 2050, "Nazaret");
contacts.printContacts();
