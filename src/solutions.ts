// -- 01 --
function multiplyValue (value: number, multiplier: number = 2): number{
    return value * multiplier;
}

// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));


// -- 02 --
function processInput (value: string | number | boolean): string | number {

    if (typeof value === "string"){
        let result : string = value.trim();
        return result.toLowerCase();
    }

    if (typeof value === "number"){
        let result : number = value * 10;
        return result;
    }

    if (typeof value === "boolean"){
        if (value === true){
            return "Active";
        } else {
            return "inactive";
        }
    }
    return "";
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

// -- 03 --
