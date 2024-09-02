"use strict";
function manyGreet(message, times = 1) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
manyGreet("Hello, World!");
manyGreet("Hello, TypeScript!", 3);
