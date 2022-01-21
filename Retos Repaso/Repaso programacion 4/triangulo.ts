import { Punto } from "./punto";

export class Triangulo {
  //Atributos
  private vertice1: Punto;
  private vertice2: Punto;
  private vertice3: Punto;
  //Constructor
  constructor(vertice1: Punto, vertice2: Punto, vertice3: Punto) {
    this.vertice1 = vertice1;
    this.vertice2 = vertice2;
    this.vertice3 = vertice3;
  }
  //getters and setters
  getVertice1() {
    return this.vertice1;
  }
  getVertice2() {
    return this.vertice2;
  }
  getVertice3() {
    return this.vertice3;
  }

  //Metodos publicos
  calcularLongitudLados(): number[] {
    let longitudLados = [];
    longitudLados[0] = this.vertice1.calcularDistancia(this.vertice2);
    longitudLados[1] = this.vertice2.calcularDistancia(this.vertice3);
    longitudLados[2] = this.vertice3.calcularDistancia(this.vertice1);
    return longitudLados;
  }
}
