function getAverage(numberList) {
    let sumTotal = 0;
    for (let i = 0; i < numberList.length; i++) {
        sumTotal += numberList[i];// sumTotal = sumTotal + numberList[i]
    }
    return sumTotal / numberList.length; //final step for average
}

console.log("AVG:", getAverage([6, 3, 5, 0, 2]));

let studentList1 = [  // array of students
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] }
];

let studentList2 = [
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function showAverages(studentList){
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        const average = getAverage(student.scores);
        const textAverage = average.toFixed(1);
        console.log(student.name, textAverage);
    }
}
showAverages(studentList1);
showAverages(studentList2);

// let numbers = [6, 3, 5, 0, 2]; //array  list of number
// console.log("AVG:", getAverage(numbers));

// let total = addThemUp(numbers)
// console.log("TOTAL:", total);

// let quantity = numbers.length;
// let average = total / quantity;
// console.log("QUANTITY:", quantity);
// console.log("AVERAGE:", average);


// 1. add them all up
// 6+3=9
// 9+5=14
// 14+0=14
// 14+2+16
// ----
// 16

// 2. divide total by length of the list
// (16 / 5) == 3 + 1/5  == 3.2 decimal