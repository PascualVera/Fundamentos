import { Mobile } from "./mobile";
export class MobileLibrary {
  //Atributos
  private name: string;
  private location: string;
  private mobiles: Mobile[];
  private totalPrice: number;
  //Contstructor
  constructor(name: string, location: string, mobiles: Mobile[]) {
    this.name = name;
    this.location = location;
    this.mobiles = mobiles;
    this.totalPrice = this.totalPriceCalculation(mobiles);
  }
  //setters and getters
  //getters
  getName(): string {
    return this.name;
  }
  getLocation(): string {
    return this.location;
  }
  getMobiles(): Mobile[] {
    return this.mobiles;
  }
  getTotalPrice(): number {
    return this.totalPrice;
  }
  //setters
  setName(name: string) {
    this.name = name;
  }
  setLocation(location: string) {
    this.location = location;
  }
  setMobiles(mobiles: Mobile[]) {
    this.mobiles = mobiles;
    this.totalPrice = this.totalPriceCalculation(mobiles);
  }
  setTotalPrice(price: number) {
    this.totalPrice = price;
  }
  //Metodos privados
  private totalPriceCalculation(moviles: Mobile[]): number {
    let total = 0;
    for (const mobiles of moviles) {
      total += mobiles.getPrice();
    }
    return total;
  }
  //Metodo publico
  printLibrary(): void {
    console.log("This are all my mobiles:" + "\n");
    for (const moviles of this.mobiles) {
      "The characteristics of the mobile" + moviles.getName() + "are:" + "\n";
      moviles.printAll();
      console.log("");
    }
    console.log("Price overall: " + this.totalPrice);
  }
}
