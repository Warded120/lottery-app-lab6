"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    // Реалізація абстрактного методу
    getAnnualBonus() {
        return this.salary * 0.20; // 20% бонусу від зарплати
    }
    // Реалізація методу інтерфейсу Payable
    pay() {
        console.log(`${this.name} (Manager) has been paid: ${this.getAnnualBonus()}$`);
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map