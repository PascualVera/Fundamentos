class Person {
  constructor(peso, altura) {
    this.nombre = null;
    this.apellidos = null;
    this.peso = peso;
    this.altura = altura / 100;
    this.IMC = (peso / (altura / 100) ** 2).toFixed(2);
    this.colorOjos;
    this.dinero;
    this.yearOfBirth;
    this.hobbits;
  }
  edad(year) {
    return year - this.yearOfBirth;
  }
  printAll(person) {
    for (let value in person) {
      console.log(value + " - " + person[value]);
    }
  }
  printHobbits() {
    this.hobbits.forEach((val) => console.log(val));
  }
}

//6.-
module.exports = {
  Person,
};
