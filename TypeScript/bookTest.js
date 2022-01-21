"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var book1;
book1 = new book_1.Book("Teo va al Parque", 2500, "8448003373", "Violeta Denou", "Timun Mas Infantil");
//Get
console.log(book1.getTitle());
console.log(book1.getPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());
//Set
book1.setTitle("El ultimo deseo");
book1.setPages(264);
book1.setIsbn("9788498891270");
book1.setAuthor("ANDRZEJ SAPKOWSKI");
book1.setEditorial("ALAMUT EDICIONES");
//toString()
console.log(book1.toString());
