"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
// Функція для розрахунку вартості морозива
function calculateIceCreamCost() {
    return __awaiter(this, void 0, void 0, function* () {
        // Запитуємо розмір морозива
        const size = yield askQuestion("Оберіть розмір морозива (маленький/великий): ");
        let totalCost = 0;
        // Встановлюємо базову вартість в залежності від розміру
        if (size === "маленький") {
            totalCost += 10;
        }
        else if (size === "великий") {
            totalCost += 25;
        }
        else {
            console.log("Неправильний розмір. Оберіть 'маленький' або 'великий'.");
            rl.close();
            return;
        }
        // Запитуємо начинку
        const toppings = yield askQuestion("Оберіть начинку (шоколад/карамель/ягоди). Ви можете вибрати кілька, розділяючи їх комою: ");
        if (toppings) {
            const toppingsArray = toppings.split(",");
            // Додаємо вартість кожної начинки
            for (const topping of toppingsArray) {
                switch (topping.trim()) {
                    case "шоколад":
                        totalCost += 5;
                        break;
                    case "карамель":
                        totalCost += 6;
                        break;
                    case "ягоди":
                        totalCost += 10;
                        break;
                    default:
                        console.log(`Начинка '${topping.trim()}' не знайдена. Вартість не додана.`);
                        break;
                }
            }
        }
        else {
            console.log("Не вибрано жодної начинки.");
            rl.close();
            return;
        }
        // Запитуємо, чи потрібно додати маршмелоу
        const addMarshmallow = yield askQuestion("Додати маршмелоу? (так/ні): ");
        if (addMarshmallow === "так") {
            totalCost += 5;
        }
        // Виведення підсумкової вартості
        console.log(`Загальна вартість морозива: ${totalCost} грн.`);
        rl.close();
    });
}
// Виклик функції
calculateIceCreamCost();
