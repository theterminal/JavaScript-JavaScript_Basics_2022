// 20220205 - JavaScript - Programming Basics - First Steps in Coding
// 06 - Data Concatenation - judge: https://judge.softuni.org/Contests/Compete/Index/2399#5


function dataConcatenation(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = input[2];
  let town = input[3];

  // let total = "You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + "."; // 1
  let total = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;    // 2

  console.log(total);
}

dataConcatenation(["Kiril", "Kara", 149, "Pleven"]);
