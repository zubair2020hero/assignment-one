// -- 01 --
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

// -- 02 --
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    let result: string = value.trim();
    return result.toLowerCase();
  }

  if (typeof value === "number") {
    let result: number = value * 10;
    return result;
  }

  if (typeof value === "boolean") {
    if (value === true) {
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
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  return (
    "Location: " +
    coordinate[2] +
    "(" +
    coordinate[0] +
    ", " +
    coordinate[1] +
    ")"
  );
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// -- 04 --
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];

  for (let array of arrays) {
    result = result.concat(array);
  }
  return result;
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// -- 05 --
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(course: Course[], minStudents: number): Course[] {
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

function pluckValues<T, K extends keyof T> (
    items: T[],
    key: K
): T[K][]{
    return items.map(item => item[key]);
}

const user = [
    {id: 1, name: "Rakib", role: "Admin"},
    {id: 2, name: "Sadia", role: "Editor"},
    {id: 3, name: "Tariq", role: "Subscriber"},
];

console.log(pluckValues(user, "name"));
console.log(pluckValues(user, "id"));