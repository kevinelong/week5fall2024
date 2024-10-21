
const person = { // create an object literal of key-value pairs
    first: "Kevin",
    last: "Long",
    age: 57,
    phone: "503-888-6879",
    DOB: new Date("9-13-1967")
};

const person2 = { // create an object literal of key-value pairs
    first: "Nina",
    last: "Marie",
    age: 47,
    phone: "503-888-6879",
    DOB: new Date("9-13-1977")
};

function showMe(p){ //recieve one whole object
    //compose a template string based on the object's properties
    return `
        FULL NAME:    ${p.last}, ${p.first} 
        PHONE NUMBER: ${p.phone}
    `;
}

console.log(showMe(person));
console.log(showMe(person2));
console.log(showMe({first:"Dandy", last:"Boy", phone:"555-bone"}));
