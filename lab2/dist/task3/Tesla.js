"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = void 0;
const Car_1 = require("./Car");
class Tesla extends Car_1.Car {
    constructor(model, year, color) {
        super("Tesla", model, year, color);
    }
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}`);
    }
}
exports.Tesla = Tesla;
//# sourceMappingURL=Tesla.js.map