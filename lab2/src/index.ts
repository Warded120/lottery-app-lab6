// task1 imports
import { Bird } from "./task1/Bird";
import { Cat } from "./task1/Cat";
import { Fish } from "./task1/Fish";
// task2 imports
import { Circle } from "./task2/Circle";
import { Rectangle } from "./task2/Rectangle";
import { Shape } from "./task2/Shape";
import { Triangle } from "./task2/Triangle";
// task3 imports
import { BMW } from "./task3/BMW";
import { Tesla } from "./task3/Tesla";
import { Toyota } from "./task3/Toyota";
// task4 imports
import { Developer } from "./task4/Developer";
import { Employee } from "./task4/Employee";
import { Manager } from "./task4/Manager";
import { Payable } from "./task4/Payable";
// task5 imports
import { CourseManager } from "./task5/CourseManager";
import { OnlineCourse } from "./task5/OnlineCourse";
//task6 imports
import { Book } from "./task6/Book";
import { DVD } from "./task6/DVD";
import { Library } from "./task6/Library";
import { Magazine } from "./task6/Magazine";

// (any other imports for task3, if necessary)

function task1(): void {
    console.log("\n");
    console.log("Task 1 executed--------------------");
    
    const cat = new Cat("Eliza", 12);
    const bird = new Bird("chirik", 3);
    const fish = new Fish("bul'-bul'");

    cat.makeSound?.();
    cat.move();
    bird.makeSound?.();
    bird.move();
    fish.move();
}

function task2(): void {
    console.log("\n");
    console.log("Task 2 executed--------------------");
    const shapes: Shape[] = [
        new Circle(5),
        new Rectangle(4, 6),
        new Triangle(3, 4, 5)
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

function task3(): void {
    console.log("\n");
    console.log("Task 3 executed--------------------");

    const camry = new Toyota("Camry", 2021, "White", false);
    const corolla = new Toyota("Corolla", 2022, "Black", false);

    const bmwX5 = new BMW("X5", 2023, "Blue");
    const bmwX3 = new BMW("X3", 2021, "Red");

    const teslaModelS = new Tesla("Model S", 2022, "Silver");
    const teslaModelX = new Tesla("Model X", 2023, "Black");

    camry.displayDetails();
    corolla.displayDetails();

    bmwX5.displayDetails();
    bmwX3.displayDetails();

    teslaModelS.displayDetails();
    teslaModelX.displayDetails();

}

function task4(): void {
    console.log("\n");
    console.log("Task 4 executed--------------------");

    function isPayable(object: any): object is Payable {
        return 'pay' in object;
    }    

    const employees: Employee[] = [
        new Developer("Andriy", 30, 60000),
        new Developer("Bob", 25, 55000),
        new Manager("Tanya", 45, 80000),
        new Manager("Oleg", 40, 75000)
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

function task5(): void {
    console.log("\n");
    console.log("Task 5 executed--------------------");

    const course1 = new OnlineCourse("Spring boot for begiers", 10);
    const course2 = new OnlineCourse("Тупеscript", 12);
    const course3 = new OnlineCourse("MicroServices", 8);

    course1.registerStudent("Andriy");
    course1.registerStudent("Bob");
    course2.registerStudent("Andriy");
    course3.registerStudent("Tanya");
    course3.registerStudent("Oleg");

    const courseManager = new CourseManager();

    courseManager.addCourse(course1);
    courseManager.addCourse(course2);
    courseManager.addCourse(course3);

    courseManager.listCourses();

    courseManager.removeCourse("Advanced TypeScript");
    console.log("After removing 'Advanced TypeScript':");
    courseManager.listCourses();

}

function task6(): void {
    console.log("\n");
    console.log("Task 6 executed--------------------");

    const library = new Library();

    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
    const magazine1 = new Magazine("National Geographic", "Various", 202);
    const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

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