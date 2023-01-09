// 20220205 - JavaScript - Programming Basics - First Steps in Coding
// 08 - Pet Shop - judge: https://judge.softuni.org/Contests/Compete/Index/2399#7


function petShop(input) {
  let dogFood = Number(input[0]);
  let catFood = Number(input[1]);
  let total = (dogFood * 2.50) + (catFood * 4.00);
  let result = `${total} lv.`

  console.log(result);
}

petShop(["5", "4"]);
