"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const Employee_1 = require("./Employee");
class Developer extends Employee_1.Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    // Реалізація абстрактного методу
    getAnnualBonus() {
        return this.salary * 0.10; // 10% бонусу від зарплати
    }
    // Реалізація методу інтерфейсу Payable
    pay() {
        console.log(`${this.name} (Developer) has been paid: ${this.getAnnualBonus()}$`);
    }
}
exports.Developer = Developer;
//# sourceMappingURL=Developer.js.map