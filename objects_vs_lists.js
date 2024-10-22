
// OBJECTS {} VS ARRAYS []

// fight!

// access by index vs access by key (string or number)

// array is accessed by index AKA position
// object values are access by key

// All arrays are objects.
// Most objects are not arrays.

// All dogs are mammals,
// not all mammals are dogs.

object = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
}

// OBJECTS ARE NOUNS: PEOPLE/PLACES/THINGS that can contain other OBJECTS and attributes
//WHAT DO CARS HAVE?
car = {
    price: 9999,
    make: "FORD",
    model: "MUSTANG",
    engine: {
        engineType: "Inline 4",
        pistons: [{ rodThrown: false }, { rodThrown: false }, { rodThrown: false }, { rodThrown: false }]
    }
}

htmlElement = {
    tagName: "div",
    class: ["hidden", "large", "col-3"],
    id: "thingy",
    name: "bob",
    value: "123"
}

list = [] // array literal
list2 = new Array(); // new Object

colors = ["red0", "green1", "blue2"] //list of colors
console.log(colors[1]); //prints green1
console.log(colors.at(1)) // also prints green1

console.log(list.length)

now = new Date(); // date object
count = new Number("123"); // number object

thing1 = {}; //object literal
thing2 = new Object();

// element = document.createElement("div"); //not in node

lots = []; //empty list
for (let i = 0; i < 1000; i++) {
    lots.push(i); //add one number onto the end of the list
}
console.log(lots.length) // ??? 1000 (0-999)

lotsaProps = {}; //empty object
for (let i = 0; i < 100000000; i++) {
    lotsaProps[i] = i; //key of i and value of i
}
console.log("DONE");
