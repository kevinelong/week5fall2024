// Array(ordered) of Objects(key:value pairs)
const data = [
    { name: "Dandy", kind: "Dog" },
    { name: "Koshi", kind: "Dog" },
    { name: "Bianca", kind: "Cat" },
    { name: "Finley", kind: "Cat" },
];

function petToString(pet) {
    return `
        PET NAME: ${pet.name}
        KIND: Good ${pet.kind}
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

//data.forEach(petToString); //rubberstamp each item with named function

// data.forEach((pet) => console.log(petToString(pet)))
data.forEach(printPet);
