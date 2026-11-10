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
    return ("Location: " +
        coordinate[2] +
        "(" +
        coordinate[0] +
        ", " +
        coordinate[1] +
        ")");
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// -- 04 --
function concatenateArrays(...arrays) {
    let result = [];
    for (let array of arrays) {
        result = result.concat(array);
    }
    return result;
}
function getPopularCourses(course, minStudents) {
    const popularCourses = courses.filter(function (course) {
        if (course.isPublished && course.students >= minStudents) {
            return true;
        }
    });
    return popularCourses;
}
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];
// console.log(getPopularCourses(courses, 80));
// -- 06 --
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
const user = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
console.log(pluckValues(user, "name"));
console.log(pluckValues(user, "id"));
export {};
//# sourceMappingURL=solutions.js.map