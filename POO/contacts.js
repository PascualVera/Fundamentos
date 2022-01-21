let { Person: Person } = require("./person");

class Contacts {
  constructor() {
    this.personas = [];
  }
  printPersons() {
    for (let person of this.personas) {
      person.printAll(person);
    }
  }
}

module.exports = {
  Contacts,
};
