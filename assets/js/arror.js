// //Масиви

// const nambers = [1, 9, 25, 11, 53, 76];

// console.log("Випадкові числа:", nambers);
// nambers.pop();
// nambers.shift();

// nambers.push("Перший елемент");
// nambers.unshift("Останій елемент ");

// console.log(nambers);
// console.log(nambers.length);

// const copyNambers = [...nambers];
// console.log(copyNambers);
//////////////////////////////////////////////////////////////////
// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "David",
//   "Eve",
//   "Frank",
//   "Grace",
//   "Heidi",
//   "Ivan",
// ];

// const evenIndexNames = [];
// for (let index in names) {
//   index = Number(index);

//   if (index % 2 === 0) {
//     evenIndexNames.push(names[index]);
//   }
// }

// console.log(evenIndexNames);

// const numbers = [1, 2, 3, 4, 5];
// let product = 1;

// for (const number of numbers) {
//   product *= number;
// }

// console.log("Добуток:", product);

// const phones = [
//   {
//     id: 1,
//     brand: "Samsung",
//     model: "Galaxy S21",
//     color: "Phantom Black",
//     price: 900,
//     RAM: "8GB",
//   },
//   {
//     id: 2,
//     brand: "Apple",
//     model: "iPhone 12",
//     color: "Midnight Green",
//     price: 1000,
//     RAM: "8GB",
//   },
//   {
//     id: 3,
//     brand: "Xiaomi",
//     model: "redmi note 10",
//     color: " Black",
//     price: 700,
//     RAM: "8GB",
//   },
// ];

// let total = 0;
// for (const phone of phones) {
//   total += phone.price;
// }
// const averagePrice = total / phones.length;

// console.log("Середня ціна телефонів:", averagePrice);

// for (let i = 0; i < phones.length; i++) {
//   const phone = phones[i];
//   const cardHTML = `
//     <article>
//     <div class= "a">
//       <h2>${phone.brand} ${phone.model}</h2>
//       </div>
//         <p>Color: ${phone.color}</p>
//         <p>RAM: ${phone.RAM}</p>
//         <p>Price:${phone.price}</p>

//     </article>
//   `;
//   document.write(`${cardHTML}`);
// }
//////////////////////////////////////////////////////////////////////
const numbers = [-1, 5, 0, 9, -10];
const nonZeroNumbers = numbers.filter((number) => number !== 0);

console.log(nonZeroNumbers);

const numbers2 = [99, 5, 0, 9, 30];
const dividedBy100 = numbers2.map((number) => number / 100);

console.log(dividedBy100);

const numbers3 = [2, 3, 5, 7];
numbers3.forEach((number) => {
  const cube = number ** 3;
  console.log(cube);
});

const numbers4 = [10, 5, 8, 10, 15];

const index = numbers4.findIndex((number) => number * number === 100);

if (index !== -1) {
  numbers4.splice(index, 1);
  console.log(`Елемент з квадратом, що дорівнює 100, був видалений.`);
} else {
  console.log(`Елемент з квадратом, що дорівнює 100, не знайдений.`);
}

console.log(numbers4);
