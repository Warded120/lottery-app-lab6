"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, pages) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        console.log(`Book: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }
    getDetails() {
        return `Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Borrowed: ${this.borrowed}`;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map