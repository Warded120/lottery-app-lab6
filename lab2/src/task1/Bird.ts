import { Animal } from "./interfaces/Animal";

export class Bird implements Animal {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} flies`);
    }

    makeSound?(): void {
        console.log(`${this.name} sings`);
    }
}