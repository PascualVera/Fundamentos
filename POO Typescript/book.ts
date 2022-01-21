export class Book {
  //Atributos
  private title: string;
  private nPages: number;
  private isbn: string;
  private author: string;
  private editorial: string;
  //Constructor
  constructor(
    title: string,
    nPages: number,
    isbn: string,
    author: string,
    editorial: string
  ) {
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }

  //Getters
  getTitle(): string {
    return this.title;
  }
  getPages(): number {
    return this.nPages;
  }
  getIsbn(): string {
    return this.isbn;
  }
  getAuthor(): string {
    return this.author;
  }
  getEditorial(): string {
    return this.editorial;
  }
  //Setters
  setTitle(title: string): void {
    this.title = title;
  }
  setPages(nPages: number): void {
    this.nPages = nPages;
  }
  setIsbn(isbn: string): void {
    this.isbn = isbn;
  }
  setAuthor(author: string): void {
    this.author = author;
  }
  setEditorial(editorial: string): void {
    this.editorial = editorial;
  }
  //Metodos publicos
  toString(): string {
    return `Titulo - ${this.title} 
Number of pages - ${this.nPages}
ISBN - ${this.isbn}
Author - ${this.author}
Editorial - ${this.editorial}`;
  }
}
