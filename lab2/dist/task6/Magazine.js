"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(title, author, issueNumber) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        console.log(`Magazine: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }
    getDetails() {
        return `Magazine: ${this.title}, Author: ${this.author}, Issue Number: ${this.issueNumber}, Borrowed: ${this.borrowed}`;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map