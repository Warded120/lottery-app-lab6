"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    scale(factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}
exports.Triangle = Triangle;
//# sourceMappingURL=Triangle.js.map