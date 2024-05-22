//завданя 1
// function isWorkingAgePerson(age) {
//   return isInWorkingAgeRange(age);
// }

// function isInWorkingAgeRange(age) {
//   return age >= 16 && age <= 64;
// }

// console.log(isWorkingAgePerson(20)); // true
// console.log(isWorkingAgePerson(4)); // false
// console.log(isWorkingAgePerson(88)); // false

//завданя 2
// function checkMultiplicity(a, b) {
//   return a % b === 0;
// }
// console.log(checkMultiplicity(25, 5)); // true
// console.log(checkMultiplicity(15, 3)); // true
// console.log(checkMultiplicity(15, 5)); // true
// console.log(checkMultiplicity(15, 4)); // false

//завданя 3
/**
 * Функція для перевірки можливості існування трикутника
 * @param {number} a - Довжина першої сторони трикутника
 * @param {number} b - Довжина другої сторони трикутника
 * @param {number} c - Довжина третьої сторони трикутника
 * @returns {boolean} - Повертає true, якщо трикутник можливий, і false, якщо ні
 */
function canFormTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
console.log(canFormTriangle(3, 4, 5));
console.log(canFormTriangle(1, 10, 12));
console.log(canFormTriangle(7, 10, 5));
console.log(canFormTriangle(1, 2, 3));
//завданя 4
function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}

function calculateRectangleArea(length, width) {
  return length * width;
}
let triangleBase = 5;
let triangleHeight = 10;
let triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
console.log(`Площа трикутника: ${triangleArea}`);

let rectangleLength = 4;
let rectangleWidth = 7;
let rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
console.log(`Площа прямокутника: ${rectangleArea}`);
