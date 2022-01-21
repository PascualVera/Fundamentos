"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //Constructor
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Getters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    //Setters
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    //Metodos publicos
    Book.prototype.toString = function () {
        return "Titulo - ".concat(this.title, " \nNumber of pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
