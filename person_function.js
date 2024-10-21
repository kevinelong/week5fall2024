
//person builder function
function Person(firstName, lastName, humanAge){ //begin function body

    //convert two strings and a number into ONE object
    return { //begin object literal
        first: firstName,
        last: lastName,
        age: humanAge
    };// return literal object

}//end function body

let personObject = Person("Kevin", "Long", 57);

console.log(`
   FIRST: ${personObject.first}
   LAST:  ${personObject.last}
   AGE:   ${personObject.age}
`);
