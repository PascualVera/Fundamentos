import { Book } from "./book";
import { Library } from "./library";

//Atributos
let libreria: Library;
let book1: Book;
let book2: Book;
let book3: Book;
//
book1 = new Book(
  "Teo va al Parque",
  2500,
  "8448003373",
  "Violeta Denou",
  "Timun Mas Infantil"
);
book2 = new Book(
  "Harry Potter y tal",
  500,
  "8448003373",
  "J.k Rowling",
  "Planeta"
);
book3 = new Book(
  "El ultimo deseo",
  264,
  "9788498891270",
  "ANDRZEJ SAPKOWSKI",
  "ALAMUT EDICIONES"
);

libreria = new Library(
  [book1, book2, book3],
  "Calle Falsa 123",
  "El Bibliotecario"
);
//Test
console.log(libreria.getAddress());
console.log(libreria.getManager());
console.log(libreria.getNumberofBooks());
console.log(libreria.findByAuthor("J.k Rowling"));
