function customCounter(incrementBy) {
  let count = 0;

  return function () {
    try {
      if (typeof incrementBy !== "number") {
        throw new Error("Значення IncrementBy повино бути числом");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
    count += incrementBy;
    return count;
  };
}
const myCounter = customCounter("");
const result1 = myCounter();
const result2 = myCounter();
const result3 = myCounter();

console.log(result1);
console.log(result2);
console.log(result3);
