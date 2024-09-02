"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toyota = void 0;
const Car_1 = require("./Car");
class Toyota extends Car_1.Car {
    constructor(model, year, color, hybrid) {
        super("Toyota", model, year, color);
        this.hybrid = hybrid;
    }
    // Реалізація абстрактного методу
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}, Hybrid: ${this.hybrid ? "Yes" : "No"}`);
    }
}
exports.Toyota = Toyota;
//# sourceMappingURL=Toyota.js.map