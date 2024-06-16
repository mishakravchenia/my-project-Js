"use strict";

const array = [
  [1, "first"],
  [3, "third"],
];
//Створена колекція Map для array
const collectioMap = new Map(array);
console.log(collectioMap);

//додаваня і видаленя
collectioMap.set(2, "second").set(4, "fourth");
collectioMap.delete(4, "fourth");

//Пошук
console.log(collectioMap.get(1));

//Перевірка
console.log(collectioMap.has(2));

//отриманя список ключів та значень окремо
console.log(collectioMap.keys());
console.log(collectioMap.values());
console.log(collectioMap.entries());

//кількість елементів
console.log(collectioMap.size);

//завданя із зірочкою
const numeral = new Map(sentence);
numeral.set("1", "first").set("2", "two").set("3", "third");

const sentence =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

function sentenceProcessing(sentence) {
  return sentence
    .split(" ")
    .map((key) => (numeral.has(key) ? numeral.get(key) : numeral))
    .join("");
}
console.log(sentence);

const changeSentence = sentenceProcessing(sentence);
