// 20220305 - JavaScript - For Loops
// Additional 02 - Hospital - judge: https://judge.softuni.org/Contests/Practice/Index/1680#1


function hospital(input) {
    let index = 0;
    let period = Number(input[index++]);
    let patients = 0; let doctors = 7; let treatedPatients = 0; let unTreatedPatients = 0; let dayCounter = 1;

    for (let i = 0; i < period; i++) {
        if (dayCounter % 3 === 0 && treatedPatients < unTreatedPatients) {
            doctors++;
        }

        patients = Number(input[index++]);

        if (patients >= doctors) {
            treatedPatients += doctors;
            unTreatedPatients = unTreatedPatients + (patients - doctors);
        } else {
            treatedPatients += patients;
        }

        dayCounter++;
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${unTreatedPatients}.`);
}


hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
