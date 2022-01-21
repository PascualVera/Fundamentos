export class Vector {
  //Atributos
  private elements: number[];
  //Constructor
  constructor(n: number, k: number) {
    this.elements = [];
    for (let i = 0; i < n; i++) {
      this.elements[i] = Math.round(Math.random() * k);
    }
  }
  //get
  getElement(): number[] {
    return this.elements;
  }
  setElement(element: number[]): void {
    this.elements = element;
  }
  //Metodos
  add(v1: Vector): Vector {
    let array: number[];
    array = [];
    for (let i = 0; i < this.elements.length; i++) {
      array[i] = v1.getElement()[i] + this.elements[i];
    }
    v1.setElement(array);
    return v1;
  }
  subs(v1: Vector): Vector {
    let array: number[];
    array = [];
    let vectorSubs = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      array[i] = this.elements[i] - v1.getElement()[i];
    }
    vectorSubs.setElement(array);
    return vectorSubs;
  }
  mult(v1: Vector): Vector {
    let array: number[];
    array = [];
    let vectorMult = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      array[i] = v1.getElement()[i] * this.elements[i];
    }
    vectorMult.setElement(array);
    return vectorMult;
  }
  multNumber(n: number): Vector {
    let vectorX = new Vector(2, 2);
    let array: number[];
    array = [];
    vectorX.setElement(array);
    for (let i = 0; i < this.elements.length; i++) {
      array[i] = this.elements[i] * n;
    }
    return vectorX;
  }
}
