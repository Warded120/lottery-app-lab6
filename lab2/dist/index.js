"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task1 imports
const Bird_1 = require("./task1/Bird");
const Cat_1 = require("./task1/Cat");
const Fish_1 = require("./task1/Fish");
// task2 imports
const Circle_1 = require("./task2/Circle");
const Rectangle_1 = require("./task2/Rectangle");
const Triangle_1 = require("./task2/Triangle");
// task3 imports
const BMW_1 = require("./task3/BMW");
const Tesla_1 = require("./task3/Tesla");
const Toyota_1 = require("./task3/Toyota");
// task4 imports
const Developer_1 = require("./task4/Developer");
const Manager_1 = require("./task4/Manager");
// task5 imports
const CourseManager_1 = require("./task5/CourseManager");
const OnlineCourse_1 = require("./task5/OnlineCourse");
const Book_1 = require("./task6/Book");
const DVD_1 = require("./task6/DVD");
const Library_1 = require("./task6/Library");
const Magazine_1 = require("./task6/Magazine");
// (any other imports for task3, if necessary)
function task1() {
    var _a, _b;
    console.log("\n");
    console.log("Task 1 executed--------------------");
    const cat = new Cat_1.Cat("Eliza", 12);
    const bird = new Bird_1.Bird("chirik", 3);
    const fish = new Fish_1.Fish("bul'-bul'");
    (_a = cat.makeSound) === null || _a === void 0 ? void 0 : _a.call(cat);
    cat.move();
    (_b = bird.makeSound) === null || _b === void 0 ? void 0 : _b.call(bird);
    bird.move();
    fish.move();
}
function task2() {
    console.log("\n");
    console.log("Task 2 executed--------------------");
    const shapes = [
        new Circle_1.Circle(5),
        new Rectangle_1.Rectangle(4, 6),
        new Triangle_1.Triangle(3, 4, 5)
    ];
    let totalArea = 0;
    let totalPerimeter = 0;
    shapes.forEach(shape => {
        totalArea += shape.getArea();
        totalPerimeter += shape.getPerimeter();
    });
    console.log(`Total area: ${totalArea.toFixed(2)}`);
    console.log(`Total perimeter: ${totalPerimeter.toFixed(2)}`);
}
function task3() {
    console.log("\n");
    console.log("Task 3 executed--------------------");
    const camry = new Toyota_1.Toyota("Camry", 2021, "White", false);
    const corolla = new Toyota_1.Toyota("Corolla", 2022, "Black", false);
    const bmwX5 = new BMW_1.BMW("X5", 2023, "Blue");
    const bmwX3 = new BMW_1.BMW("X3", 2021, "Red");
    const teslaModelS = new Tesla_1.Tesla("Model S", 2022, "Silver");
    const teslaModelX = new Tesla_1.Tesla("Model X", 2023, "Black");
    camry.displayDetails();
    corolla.displayDetails();
    bmwX5.displayDetails();
    bmwX3.displayDetails();
    teslaModelS.displayDetails();
    teslaModelX.displayDetails();
}
function task4() {
    console.log("\n");
    console.log("Task 4 executed--------------------");
    function isPayable(object) {
        return 'pay' in object;
    }
    const employees = [
        new Developer_1.Developer("Andriy", 30, 60000),
        new Developer_1.Developer("Bob", 25, 55000),
        new Manager_1.Manager("Tanya", 45, 80000),
        new Manager_1.Manager("Oleg", 40, 75000)
    ];
    let totalAnnualBonus = 0;
    employees.forEach(employee => {
        totalAnnualBonus += employee.getAnnualBonus();
        if (isPayable(employee)) {
            employee.pay();
        }
    });
    console.log(`Total annual bonus for all employees: ${totalAnnualBonus.toFixed(2)}`);
}
function task5() {
    console.log("\n");
    console.log("Task 5 executed--------------------");
    const course1 = new OnlineCourse_1.OnlineCourse("TypeScript Basics", 10);
    const course2 = new OnlineCourse_1.OnlineCourse("Advanced TypeScript", 12);
    const course3 = new OnlineCourse_1.OnlineCourse("JavaScript for Beginners", 8);
    course1.registerStudent("Andriy");
    course1.registerStudent("Bob");
    course2.registerStudent("Andriy");
    course3.registerStudent("Tanya");
    course3.registerStudent("Oleg");
    const courseManager = new CourseManager_1.CourseManager();
    courseManager.addCourse(course1);
    courseManager.addCourse(course2);
    courseManager.addCourse(course3);
    courseManager.listCourses();
    courseManager.removeCourse("Advanced TypeScript");
    console.log("After removing 'Advanced TypeScript':");
    courseManager.listCourses();
}
function task6() {
    console.log("\n");
    console.log("Task 6 executed--------------------");
    const library = new Library_1.Library();
    const book1 = new Book_1.Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
    const magazine1 = new Magazine_1.Magazine("National Geographic", "Various", 202);
    const dvd1 = new DVD_1.DVD("Inception", "Christopher Nolan", 148);
    library.addItem(book1);
    library.addItem(magazine1);
    library.addItem(dvd1);
    console.log("Available items:");
    library.listAvailableItems();
    const itemToBorrow = library.findItemByName("Inception");
    if (itemToBorrow) {
        itemToBorrow.borrow();
        library.listAvailableItems();
    }
}
task1();
task2();
task3();
task4();
task5();
task6();
//# sourceMappingURL=index.js.map