function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}
console.log(users);
//////////////////////////////////////////////////////
//Отримати масив користувачів, які не підписані (not subscribed).
const notSubscribedUsers = users.filter((user) => !user.isSubscribed);
console.log(notSubscribedUsers);

//////////////////////////////////////////////////////
//Вивести список повних імен користувачів
const fullNames = users
  .map((user) => `${user.firstName} ${user.lastName}`)
  .join(" ");
console.log(fullNames);

//////////////////////////////////////////////////////////
//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const schoolGirls = users
  .filter((user) => !user.isMale && user.age >= 6 && user.age <= 18)
  .map((user) => `${user.firstName} ${user.lastName}`);

console.log(schoolGirls);

// ////////////////////////////////////////////////////////
//Видалити з масиву користувача з email  useremail5@gmail.com.
const updatedUsers = users.filter((user) => {
  return user.email !== "useremail5@gmail.com";
});

console.log(updatedUsers);
/////////////////////////////////////////////////////////
// Змінити email користувачу з id 2
function findUserById(usersArray, userId) {
  return usersArray.find((user) => user.id === userId);
}
const userToUpdate = findUserById(users, 2);
if (userToUpdate) {
  userToUpdate.email = "newemail@gmail.com";
} else {
  console.log("Користувача з id 2 не знайдено.");
}

console.log(users);

///////////////////////////////////////////////////////////
//*Знайти середній вік користувачів (спробувати використати reduce).
const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);

const averageAge = totalAge / users.length;
console.log("Середній вік користувачів:", averageAge);

///////////////////////////////////////////////////////////
//*Перевірити, чи всі користувачі підписані (subscribed).
let allSubscribed = true;
users.forEach((user) => {
  if (!user.isSubscribed) {
    allSubscribed = false;
  }
});

if (allSubscribed) {
  console.log("Всі користувачі підписані.");
} else {
  console.log("Не всі користувачі підписані.");
}
