"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
class Bird {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} flies`);
    }
    makeSound() {
        console.log(`${this.name} sings`);
    }
}
exports.Bird = Bird;
//# sourceMappingURL=Bird.js.map