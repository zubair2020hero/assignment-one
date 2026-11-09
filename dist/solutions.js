// -- 01 --
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));
// -- 02 --
function processInput(value) {
    if (typeof value === "string") {
        let result = value.trim();
        return result.toLowerCase();
    }
    if (typeof value === "number") {
        let result = value * 10;
        return result;
    }
    if (typeof value === "boolean") {
        if (value === true) {
            return "Active";
        }
        else {
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
function formatCoordinate(coordinate) {
    return "Location: " + coordinate[2] + "(" + coordinate[0] + ", " + coordinate[1] + ")";
}
export {};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
//# sourceMappingURL=solutions.js.map