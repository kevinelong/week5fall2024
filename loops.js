//               0          1         2        3
const kids = ["bianca", "fineley", "dandy", "koshka"];

const howMany = kids.length; //how many 4

//while is like an if that repeats

let current = 0; //first one //initializer

console.log("LETS GO!!!")

while(current < howMany){ //stop when this EXPRESSION is false
    //repeats
    console.log(kids[current]);
    // current = current + 1;
    // current += 1
    current++; //bump up by 1 increment
}

console.log("ALL DONE")
//combine initializer; expression; and increment
for(let i=0; i < kids.length; i++){
    console.log(kids[i]);
}
