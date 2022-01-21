export class Mobile {
  //Atributos
  private name: string;
  private model: string;
  private trademark: string;
  private sdSize: string;
  private color: string;
  private is5g: boolean;
  private cameraNumber: number;
  private price: number;
  //Cosntructor

  constructor(
    name: string,
    model: string,
    trademark: string,
    sdSize: string,
    color: string,
    is5g: boolean,
    cameraNumber: number,
    price: number
  ) {
    this.name = name;
    this.model = model;
    this.trademark = trademark;
    this.sdSize = sdSize;
    this.color = color;
    this.is5g = is5g;
    this.cameraNumber = cameraNumber;
    this.price = price;
  }
  //Getters and Setters
  //Getters
  getName(): string {
    return this.name;
  }
  getModel(): string {
    return this.model;
  }
  getTrademark(): string {
    return this.trademark;
  }
  getSdSize(): string {
    return this.sdSize;
  }
  getColor(): string {
    return this.color;
  }
  getIs5g(): boolean {
    return this.is5g;
  }
  getCameraNumber(): number {
    return this.cameraNumber;
  }
  getPrice(): number {
    return this.price;
  }
  //Setters
  setName(name: string) {
    this.name = name;
  }
  setModel(model: string) {
    this.model = model;
  }
  setTrademark(trademark: string) {
    this.trademark = trademark;
  }
  setSdSize(sdSize: string) {
    this.sdSize = sdSize;
  }
  setColor(color: string) {
    this.color = color;
  }
  setIs5g(is5g: boolean) {
    this.is5g = is5g;
  }
  setCameraNumber(cameraNumber: number) {
    this.cameraNumber = cameraNumber;
  }
  setPrice(price: number) {
    this.price = price;
  }
  //Public metods
  printAll(): void {
    let specs = `The characteristics of the mobile ${this.name} are:
      Name: ${this.name}
      Model: ${this.model}
      Trademark: ${this.trademark}
      SD Size (GB): ${this.sdSize}
      Color: ${this.color}
      Is 5g?: ${this.is5g}
      Number of Cameras: ${this.cameraNumber}`;
    console.log(specs);
  }
}
