// 20220309 JavaScript

// (00010101 - Sunday); (20200101 Wednesday); (19720101 Saturday, Leap 4); (20200101 Wednesday, Leap 4);
function calendar() {
    let yearStart = 1972; let yearEnd = 2023;
    let counterLeap = 4;                                // if yearStart === Leap than counter = 4;
    let numDay = 6;                                     // Mon = 1; Tue = 2; Wed = 3; Thu = 4; Fri = 5; Sat = 6; Sun = 7;

    for (let y = yearStart; y <= yearEnd; y++) {
        for (let m = 1; m <= 12; m++) {
            for (let d = 1; d <= 31; d++) {
                if (counterLeap === 4) {
                    if ((m === 2 && d === 30) || ((m === 4 || m === 6 || m === 9 || m === 11) && d === 31)) {
                        counterLeap = 0;
                        break;
                    }
                } else {
                    if ((m === 2 && d === 29) || ((m === 4 || m === 6 || m === 9 || m === 11) && d === 31)) {
                        break;
                    }
                }
                switch (numDay) {
                    case 1: day = "Monday"; break;
                    case 2: day = "Tuesday"; break;
                    case 3: day = "Wednesday"; break;
                    case 4: day = "Thursday"; break;
                    case 5: day = "Friday"; break;
                    case 6: day = "Saturday"; break;
                    case 7: day = "Sunday"; break;
                }
                console.log(`${y} / ${m} / ${d} - ${day}`);

                numDay++;
                if (numDay === 8) {
                    numDay = 1;
                }
            }
        }
        console.log();
        counterLeap++;
    }
}

calendar();
