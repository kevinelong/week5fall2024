function Position(px, py) {
    return { x: px, y: py };
}

function Sprite(nameParameter, kindParameter, posParameter) {
    return {
        health: 100,
        name: nameParameter,
        kind: kindParameter,
        position: posParameter,
    };
}

// const things = []
// const entities = []

const spriteList = []; // array of things that can move on screen

spriteList.push(Sprite("Capt. Lee", "wizard", Position(10, 5)));
spriteList.push(Sprite("Capt. Jenny", "wizard", Position(5, 15)));
spriteList.push(Sprite("Venom1", "parasite", Position(20, 10)));
spriteList.push(Sprite("Venom2", "parasite", Position(15, 10)));
spriteList.push(Sprite("Venom3", "parasite", Position(20, 15)));

function printList(list){
    for (let i = 0; i < list.length; i++) {
        console.log(i, list[i]);
    }
}

function getHeroList(){
    const outputList = []; // array 
    for (let i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "wizard"){ // filter hero wizards only
            outputList.push(spriteList[i]); //add to array list
        }
    }
    return outputList; //send array back
}

printList(getHeroList());

// function printHero(){
//     for (let i = 0; i < spriteList.length; i++) {
//         if(spriteList[i].kind === "wizard"){
//             console.log(i, spriteList[i]);
//         }
//     }
// }

// function printParasites(){
//     for (let i = 0; i < spriteList.length; i++) {
//         if(spriteList[i].kind === "parasite"){
//             console.log(i, spriteList[i]);
//         }
//     }
// }
