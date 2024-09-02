"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} walks`);
    }
    makeSound() {
        console.log(`${this.name} says moew`);
    }
}
exports.Cat = Cat;
//# sourceMappingURL=Cat.js.map