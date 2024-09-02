"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    listAvailableItems() {
        this.items.forEach(item => {
            console.log(item.getDetails());
        });
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map