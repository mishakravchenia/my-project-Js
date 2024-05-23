// //завдання 1
// let customer = {
//   firstName: "Міша",
//   lastName: "Кравченя",
//   email: "misha@gmail.com",
//   password: "password",
//   phoneNumber: "+380681262505",
//   address: {
//     city: "Рівне",
//     street: "Героїв україни",
//     house: "24a",
//     apartment: "1",
//   },
//   isMale: true,

//   printAddress: function () {
//     if (typeof this.address === "object") {
//       console.log(
//         `${this.address.city} ${this.address.street} ${this.address.house} ${this.address.apartment}`
//       );
//     } else {
//       console.log(`адреса: ${this.address}`);
//     }
//   },
//   changePhoneNumber: function (newPhoneNumber) {
//     this.phoneNumber = newPhoneNumber;
//   },
// };
// customer.printAddress();
// customer.changePhoneNumber("+380681262505");
// console.log(`Новий номер телефону: ${customer.phoneNumber}`);

// delete customer.address;
// customer.printAddress();
// let customerCopy1 = Object.assign({}, customer);
// console.log(customerCopy1);

// let customerCopy2 = JSON.parse(JSON.stringify(customer));
// console.log(customerCopy2);

// const cat = {
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,
// };

// for (const key in cat) {
//     if (cat.hasOwnProperty(key)) {
//         console.log(`${key}: ${cat[key]}`);
//     }
// }
function Book(author, title, year, publisher, price) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.publisher = publisher;
  this.price = price;
}

Book.prototype.getBookAge = function () {
  return new Date().getFullYear() - this.year;
};

Book.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const book1 = new Book(
  "Тарас Шевченко",
  "Кобзар",
  1840,
  { city: "Київ", name: "А-ба-ба-га-ла-ма-га" },
  200
);
console.log(book1);
console.log("Вік книги:", book1.getBookAge(), "років");
book1.setPrice(250);
console.log("Нова ціна книги:", book1.price);

const customer = { name: "Іван", age: 30, city: "Львів" };
const customerCopy1 = { ...customer };
console.log(customerCopy1);
