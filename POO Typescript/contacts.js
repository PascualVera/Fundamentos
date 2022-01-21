"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    //Constructor
    function Contacts() {
        this.people = [];
    }
    //Metodos publicos
    Contacts.prototype.printContacts = function () {
        for (var i = 0; i < this.people.length; i++) {
            for (var person in this.people[i]) {
                if (typeof this.people[i][person] != "function")
                    console.log(person + ": " + this.people[i][person]);
            }
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
