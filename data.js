// CTRL-C COPY // CTRL-V PASTE // CTRL-/ COMMENT/UNCOMMENT // CTRL-Z UNDO // CTRL-X CUT

// Array(ordered) of Objects(key:value pairs)
const data = [ //creates an array [] AKA ordered list
    { name: "Dandy", kind: "Dog" }, // {} create an object AKA key:value pairs
    { name: "Koshi", kind: "Dog" },
    { name: "Bianca", kind: "Cat" },
    { name: "Finley", kind: "Cat" },
]; //end array

function petToString(pet) {
    return `
        MATH: ${ 6 * 7 } <-- ANY EXPRESSION \$\{\}
        WORDS: ${ "AAA" + "BBB" } <-- string concatenation?
        PET NAME:  ${ pet.name }
        KIND: Good ${ pet.kind }
    `;
}

function printPet(pet) {
    console.log( petToString(pet) );
}

// console.log(petToString(data[0])); //first
// console.log(petToString(data[data.length - 1])); //last one

// CLASSIC (old school?)
// for (i = 0; i < data.length; i++) { // i is index
//     console.log(petToString(data[i])); // i-th
// }

// data.forEach(petToString); //rubberstamp/repeat each item with named function

// data.forEach((pet) => console.log(petToString(pet)))
data.forEach(printPet);
