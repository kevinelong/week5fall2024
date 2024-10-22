function getAverage(numberList) {
    let sumTotal = 0;
    for (i = 0; i < numberList.length; i++) {
        sumTotal += numberList[i];// sumTotal = sumTotal + numberList[i]
    }
    return sumTotal / numberList.length; //final step for average
}

console.log("AVG:", getAverage([6, 3, 5, 0, 2]));

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