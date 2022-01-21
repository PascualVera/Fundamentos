import { Book } from "./book";
export class Library {
  //Atributos
  private books: Book[];
  private address: string;
  private manager: string;
  //Constructor
  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }

  //getters and setters
  getAddress(): string {
    return this.address;
  }
  getManager(): string {
    return this.manager;
  }
  setAddress(address: string): void {
    this.address = address;
  }
  setManager(manager: string): void {
    this.manager = manager;
  }
  //Metodos publicos
  toString(): string {
    let lista = "";
    for (let i = 0; i < this.books.length; i++) {
      lista += this.books[i].toString;
    }
    return lista;
  }
  getNumberofBooks(): number {
    return this.books.length;
  }
  findByAuthor(author: string): Book[] {
    let list = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getAuthor() === author) {
        list[i] = this.books[i];
      }
    }
    return list;
  }
}
