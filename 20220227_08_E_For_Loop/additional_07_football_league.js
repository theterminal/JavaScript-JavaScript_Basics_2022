// 20220306 - JavaScript - For Loops
// Additional 07 - Football League - judge: https://judge.softuni.org/Contests/Practice/Index/1680#6


function footballLeague(input) {
    let index = 0;
    let stadiumCapacity = Number(input[index++]);
    let numAllFans = Number(input[index++]);
    let section = 0; let counterA = 0; let counterB = 0; let counterV = 0; let counterG = 0;

    for (let i = 0; i < numAllFans; i++) {
        section = input[index++];

        switch (section) {
            case "A": counterA++; break;
            case "B": counterB++; break;
            case "V": counterV++; break;
            case "G": counterG++; break;
        }
    }
    let percentSectionA = (counterA / numAllFans * 100).toFixed(2);
    let percentSectionB = (counterB / numAllFans * 100).toFixed(2);
    let percentSectionV = (counterV / numAllFans * 100).toFixed(2);
    let percentSectionG = (counterG / numAllFans * 100).toFixed(2);
    let percentAllToStadium = (numAllFans / stadiumCapacity * 100).toFixed(2);

    console.log(`${percentSectionA}%`);
    console.log(`${percentSectionB}%`);
    console.log(`${percentSectionV}%`);
    console.log(`${percentSectionG}%`);
    console.log(`${percentAllToStadium}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);
