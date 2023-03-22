// 20220307 JavaScript


function multiplicationTable() {
    let result = "";
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            product = i * j;
            result += `${product}, `;
        }

        console.log(result);
        result = "";
    }
}


multiplicationTable();
