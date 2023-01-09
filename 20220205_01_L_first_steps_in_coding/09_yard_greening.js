// 20220205 - JavaScript - Programming Basics - First Steps in Coding
// 09 - Yard Greeninig - judge: https://judge.softuni.org/Contests/Compete/Index/2399#8


function yardGreening(input) {
  let area = Number(input[0]);
  let cost = area * 7.61;
  let discount = cost * 0.18;
  let finalCost = cost - discount;                                 // if this line is used the result in judge is 100%
// let costAfterDisc = cost * 0.82;                                // if this line is used the result in judge is 30%

  console.log(`The final price is: ${finalCost} lv.`)
  console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"]);
// yardGreening(["150"]);
