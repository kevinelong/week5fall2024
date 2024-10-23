
const listOfChildren = ["Natalie", "Brittany", "Zachary"];
listOfChildren.unshift('"Can\'t even" Bianca'); //insert at beginning of the array/list
listOfChildren.push("O'Reily"); //append at the end of array/list

//  for *OF* circa 2012 for Array/List
for (let childName of listOfChildren) {
    console.log(childName);
}

//but what about Objects?

const peopleObject = { billy: 111, janey: 222, pricilla: 333 };

// For *IN* grabs all keys from an *Object*
for (const key in peopleObject) {
    const score = peopleObject[key]; //extracting the value using the key
    console.log(`The person *${key.toUpperCase()}* has a score of ${score}.`);
}
