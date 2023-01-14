// 20220219 - JavaScript - Nested Conditional Statements
// 03 - Animal Type - judge: https://judge.softuni.org/Contests/Compete/Index/2403#2


function animalType(input) {
    let animal = input[0];

    switch (animal) {
        case "dog": result = "mammal"; break;
        case "crocodile": result = "reptile"; break;
        case "tortoise": result = "reptile"; break;
        case "snake": result = "reptile"; break;
        default: result = "unknown"; break;
    }
    console.log(result);
}

animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);
