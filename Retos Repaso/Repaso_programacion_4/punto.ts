export class Punto {
  //Atributos
  private x: number;
  private y: number;
  //Constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  //getters and setters
  getX(): number {
    return this.x;
  }
  getY(): number {
    return this.y;
  }
  setX(x: number) {
    this.x = x;
  }
  setY(y: number) {
    this.y = y;
  }
  //Metodos publicos
  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
  distanciaAlOrigen(): number {
    let origen = 0;
    origen = this.x ** 2 + this.y ** 2;
    return Math.sqrt(origen);
  }
  calcularDistancia(otroPunto: Punto): number {
    let puntoOrigen = 0;
    puntoOrigen =
      (this.x - otroPunto.getX()) ** 2 + (this.y - otroPunto.getY()) ** 2;
    return Math.sqrt(puntoOrigen);
  }
  calcularCuadrante(): number {
    let cuadrante = 0;
    if (this.x > 0 && this.y > 0) {
      cuadrante += 1;
    } else if (this.x < 0 && this.y > 0) {
      cuadrante += 2;
    } else if (this.x < 0 && this.y < 0) {
      cuadrante += 3;
    } else if (this.x > 0 && this.y < 0) {
      cuadrante += 4;
    }
    return cuadrante;
  }
  calcularMasCercano(puntos: Punto[]): Punto {
    let temporal = puntos[0];
    for (let i = 0; i < puntos.length - 1; i++) {
      if (
        this.calcularDistancia(puntos[i]) < this.calcularDistancia(temporal)
      ) {
        temporal = puntos[i];
      }
    }
    return temporal;
  }
}
