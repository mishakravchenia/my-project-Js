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
function checkMultiplicity(a, b) {
  return a % b === 0;
}
console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(15, 5)); // true
console.log(checkMultiplicity(15, 4)); // false
