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
function formatCoordinate (coordinate: readonly [number, number, string]): string{
    return "Location: " + coordinate[2] + "(" + coordinate[0] + ", " + coordinate[1] + ")";
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));