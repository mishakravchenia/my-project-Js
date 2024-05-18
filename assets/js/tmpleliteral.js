// // завданя №1
// const isDay = false;
// let color = null;
// let background = null;
// if (isDay) {
//   color = "black";
//   background = "white";
//   status = "Світла тема";
// } else {
//   color = "white";
//   background = "black";
//   status = "Темна тема";
// }
// document.write(
//   `<p style="color:${color}; background:${background};"> ${status}</p>`
// );

// завданя №2
// const isOnline = false;
// const status = isOnline
//   ? "online"
//   : "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет";
// // // document.write(`<p> ${status}</p>`);

// //Завданя №3
// const purchaseAmount = +prompt("Еnter the purchase amount:", "0");
// let discount = 0;
// if (purchaseAmount > 800) {
//   discount = 0.05;
// } else if (purchaseAmount > 500) {
//   discount = 0.03;
// }
// const finalAmount = purchaseAmount - purchaseAmount * discount;
// console.log("Остаточна сума покупки з урахуванням знижки:", finalAmount);

let dayNumber = prompt("Введіть номер дня тижня (від 1 до 7):");
dayNumber = parseInt(dayNumber);
switch (dayNumber) {
  case 1:
    dayName = "понеділок";
    break;
  case 2:
    dayName = "вівторок";
    break;
  case 3:
    dayName = "середа";
    break;
  case 4:
    dayName = "четвер";
    break;
  case 5:
    dayName = "п'ятниця";
    break;
  case 6:
    dayName = "субота";
    break;
  case 7:
    dayName = "неділя";
    break;
  default:
    dayName = "дня з таким номером не існує";
    break;
}
alert(dayName);
