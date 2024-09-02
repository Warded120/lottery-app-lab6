function manyGreet(message: string, times: number = 1): void {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}

manyGreet("Hello, World!");
manyGreet   ("Hello, TypeScript!", 3);