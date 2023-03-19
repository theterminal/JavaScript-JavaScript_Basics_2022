// 20220302 - JavaScript - For Loops
// 07 - Trekking Mania - judge: https://judge.softuni.org/Contests/Compete/Index/2406#6


function trekkingMania(input) {
    let index = 0;
    let numGroups = Number(input[index++]);
    let group = 0;
    let counterEverest = 0; let counterK2 = 0; let counterKilimanjaro = 0; let counterMonblan = 0; let counterMusala = 0; let counterAll = 0;

    for (let i = 0; i < numGroups; i++) {
        group = Number(input[index++]);

        if (group > 40) {
            counterEverest += group;
        } else if (group > 25) {
            counterK2 += group;
        } else if (group > 12) {
            counterKilimanjaro += group;
        } else if (group > 5) {
            counterMonblan += group;
        } else if (group > 0) {
            counterMusala += group;
        }

        counterAll += group;
    }
    percentEverest = (counterEverest / counterAll * 100).toFixed(2);
    percentK2 = (counterK2 / counterAll * 100).toFixed(2);
    percentKilimanfaro = (counterKilimanjaro / counterAll * 100).toFixed(2);
    percentMonblan = (counterMonblan / counterAll * 100).toFixed(2);
    percentMusala = (counterMusala / counterAll * 100).toFixed(2);

    console.log(`${percentMusala}%`);
    console.log(`${percentMonblan}%`);
    console.log(`${percentKilimanfaro}%`);
    console.log(`${percentK2}%`);
    console.log(`${percentEverest}%`);
}


trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
