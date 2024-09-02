"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMW = void 0;
const Car_1 = require("./Car");
class BMW extends Car_1.Car {
    constructor(model, year, color) {
        super("BMW", model, year, color);
    }
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}`);
    }
}
exports.BMW = BMW;
//# sourceMappingURL=BMW.js.map