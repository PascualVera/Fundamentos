"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    //Constructor
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //getters and setters
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    //Metodos publicos
    Library.prototype.toString = function () {
        var lista = "";
        for (var i = 0; i < this.books.length; i++) {
            lista += this.books[i].toString;
        }
        return lista;
    };
    Library.prototype.getNumberofBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var list = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === author) {
                list[i] = this.books[i];
            }
        }
        return list;
    };
    return Library;
}());
exports.Library = Library;
