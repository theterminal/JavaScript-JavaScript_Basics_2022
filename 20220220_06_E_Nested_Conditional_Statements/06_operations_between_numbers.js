// 20220220 JavaScript - Nested Conditional Statements
// 06 - Operations Between Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2404#5


function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0; let evenOdd = "";

    if (operator === "+" || operator === "-" || operator === "*") {
        if (operator === "+") {
            result = n1 + n2;
        } else if (operator === "-") {
            result = n1 - n2;
        } else {
            result = n1 * n2;
        }

        isEven = result % 2 === 0;

        if (isEven) {
            evenOdd = "even";
        } else {
            evenOdd = "odd";
        }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
    } else {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            if (operator === "/") {
                result = (n1 / n2).toFixed(2);
            } else {
                result = n1 % n2;
            }
            
            console.log(`${n1} ${operator} ${n2} = ${result}`);}
    }
}


operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
