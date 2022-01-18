let { Person: Person } = require("./person");
let Jose = new Person();
let Maria = new Person();
let Jesus = new Person();
class Contacts {
  constructor() {
    this.array = [Jose, Maria, Jesus];
  }
  printPersons() {
    for (let array of this.array) {
      for (let value in array) {
        console.log(value + " - " + array[value]);
      }
    }
  }
}

module.exports = {
  Contacts,
};
