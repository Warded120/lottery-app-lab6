"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
class DVD {
    constructor(title, author, duration) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        console.log(`DVD: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }
    getDetails() {
        return `DVD: ${this.title}, Author: ${this.author}, Duration: ${this.duration} minutes, Borrowed: ${this.borrowed}`;
    }
}
exports.DVD = DVD;
//# sourceMappingURL=DVD.js.map