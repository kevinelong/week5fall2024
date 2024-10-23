
//functional programming treat functions as values (a data type)

const car = {
    location: 1000,
    speed: 10,
    drive: (car) => car.location += car.speed
};

console.log(car.location) //before
car.drive(car)
car.drive(car)
car.drive(car)
console.log(car.location) //after

//WHAT IS += doing? Increasing the value on the left by the value on the right
let location = 1000
let speed = 10

console.log("LOCATION BEFORE:", location)
location += speed // SHORT FOR location = (location + speed)
location += speed // SHORT FOR location = (location + speed)
location += speed // SHORT FOR location = (location + speed)
console.log("LOCATION AFTER:", location)
