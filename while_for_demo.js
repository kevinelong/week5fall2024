//SIMPLE EXAMPLE?
let x = 0; //unlike for() we initialze befor the while()
const LIMIT = 5; // ALL caps is clue its a true constant

console.log("BEGIN", x);

while (x < LIMIT) { // should we continue? 5 < 5?
    console.log("X:", x); //print it out
    x++; //increment - bump up by one
} // go to top and revaluate continuing to enter the loop

console.log("END", x);

//CLASSIC
for (j = 0; j < 5; j++) { //THREE STATEMENT IN ONE
    console.log("J:", j);
}

// BOOK EXAMPLE
let num = 1;
let i = 0; //unlike for() we initialze befor the while()
while (i < 17) { // should we continue? 5 < 5?
    console.log("i and num:", i, num); //print it out
    i++; //increment - bump up by one
    num = num * 2; //DOUBLE UP
    // num *= 2 //SAME - DOUBLE UP
} // go to top and revaluate continuing to enter the loop

//BETTER USE OF WHILE
console.log("COUNT DOWN...")
let count = 10;
while(count > 0){
    console.log(count);
    count = count - 1; // decrement. count--
}
console.log("BLAST OFF!!!");

