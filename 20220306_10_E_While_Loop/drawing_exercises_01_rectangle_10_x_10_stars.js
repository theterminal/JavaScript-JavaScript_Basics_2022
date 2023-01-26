// 20220306 - JavaScript - While Loop
// Drawing 01 - Rectangle of 10 x 10 Stars - judge: https://judge.softuni.org/Contests/Practice/Index/1851#0


function rectangle10X10Stars() {
    let result = "";
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result = result + "*" ;
        }
        console.log(result);
        result = "";
    }
}

rectangle10X10Stars();
