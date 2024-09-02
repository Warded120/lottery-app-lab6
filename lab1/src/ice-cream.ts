import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

// Функція для розрахунку вартості морозива
async function calculateIceCreamCost() {
    // Запитуємо розмір морозива
    const size = await askQuestion("Оберіть розмір морозива (маленький/великий): ");
    let totalCost = 0;

    // Встановлюємо базову вартість в залежності від розміру
    if (size === "маленький") {
        totalCost += 10;
    } else if (size === "великий") {
        totalCost += 25;
    } else {
        console.log("Неправильний розмір. Оберіть 'маленький' або 'великий'.");
        rl.close();
        return;
    }

    // Запитуємо начинку
    const toppings = await askQuestion("Оберіть начинку (шоколад/карамель/ягоди). Ви можете вибрати кілька, розділяючи їх комою: ");

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
    } else {
        console.log("Не вибрано жодної начинки.");
        rl.close();
        return;
    }

    // Запитуємо, чи потрібно додати маршмелоу
    const addMarshmallow = await askQuestion("Додати маршмелоу? (так/ні): ");
    if (addMarshmallow === "так") {
        totalCost += 5;
    }

    // Виведення підсумкової вартості
    console.log(`Загальна вартість морозива: ${totalCost} грн.`);

    rl.close();
}

// Виклик функції
calculateIceCreamCost();
