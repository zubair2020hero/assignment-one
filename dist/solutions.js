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
export {};
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
// -- 03 --
//# sourceMappingURL=solutions.js.map