// offset          0         1           2          3
const citrus = ["lemon", "orange", "grapefruit", "yuzu"]; //FROM fetch DB API
citrus.push("lime");//add at the end (index 4) //EXTRA CUSTOM USER INPUT

let index = 0; //initializer offset/distance from 1st

while (index < citrus.length) { //condition? repeats
    //do this if true
    console.log(index, citrus[index]);
    // index = index + 1 //increase by 1
    // index += 1 // increase by 1
    index++; //increase by 1
}// go back up to 6 - different than an "if",
//  because it loops back up

//fall out of while into next line
console.log(index, "OUTSIDE AFTER THE LOOP");

//condensed lazy programmer why three lines in one:
//  (initializer; conditional;       increment) 
for (let i = 0;   i < citrus.length; i++      ) {
    console.log(i, citrus[i]);
}