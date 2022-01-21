import { Person } from "./person";
export class Contacts {
  //Atributos
  public people: Person[];
  //Constructor
  constructor() {
    this.people = [];
  }
  //Metodos publicos
  printContacts(): void {
    for (let i = 0; i < this.people.length; i++) {
      for (let person in this.people[i]) {
        if (typeof this.people[i][person] != "function")
          console.log(person + ": " + this.people[i][person]);
      }
    }
  }
}
