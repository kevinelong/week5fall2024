// CONTAINERS
// String - ordered list of characters

text = "ABC" // <-- String literal ""
console.log(text[0]) // A
console.log(text[text.length - 1]) //LAST ONE e.g. C

// Array - ordered list of values
list = ["apple", "banana", "cherry" ] // <-- array literal []
console.log(list[0]) // apple
console.log(list[2]) // cherry
console.log(list[list.length - 1]) // LAST ONE - cherry again

// Object - A bag of values accessed by name/keyword - like a dict
fruit = { "a" : "apple", "b" : "banana", "c": "cherry"}
console.log(fruit["a"]) // "apple"
console.log(fruit["c"]) // "cherry"
console.log(fruit.b)    // dot notation - banana

airports = {
    "PDX" : "Portland Airport1",
    "PDX" : "Portland Airport2",
    "ATL" : "Atlanta Airport",
    "TPA" : "Tampa Airport",
    "ORL" : "Orlando Airport" 
}
console.log(airports.PDX) //dot notation - short way
console.log(airports.ATL) //dot notation - short way
console.log(airports["ORL"]) // square bracket with string key

zip_codes = { 97018 : "Columbia City, OR"}
console.log(zip_codes[97018])
z = 97018
console.log(zip_codes[z])