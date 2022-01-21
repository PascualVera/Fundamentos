"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var library_1 = require("./library");
//Atributos
var libreria;
var book1;
var book2;
var book3;
//
book1 = new book_1.Book("Teo va al Parque", 2500, "8448003373", "Violeta Denou", "Timun Mas Infantil");
book2 = new book_1.Book("Harry Potter y tal", 500, "8448003373", "J.k Rowling", "Planeta");
book3 = new book_1.Book("El ultimo deseo", 264, "9788498891270", "ANDRZEJ SAPKOWSKI", "ALAMUT EDICIONES");
libreria = new library_1.Library([book1, book2, book3], "Calle Falsa 123", "El Bibliotecario");
//Test
console.log(libreria.getAddress());
console.log(libreria.getManager());
console.log(libreria.getNumberofBooks());
console.log(libreria.findByAuthor("J.k Rowling"));
