
function parsePartCode(part){
    //could use just split() or indexOf() and slice()
    let pieces_array = part.split(":");

    //second split
    let final_two_string = pieces_array[1];
    let final_two_array = final_two_string.split("-");

    return { //RETURN AN OBJECT LETERAL
        supplierCode : pieces_array[0],
        productNumber : final_two_array[0],
        size : final_two_array[1]
    }
}

let partObject = parsePartCode("ZYZ:1234-L")

console.log(`
    CODE:   ${partObject.supplierCode}
    NUMBER: ${partObject.productNumber}
    SIZE:   ${partObject.size}  
`);
