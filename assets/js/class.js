//1. Реалізувати клас Post (наприклад, описує пост в соц. мережі).
class Post {
  constructor(id, name, author, text, dateAdded, amountLikes, age) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._text = text;
    this._dateAdded = dateAdded;
    this._amountLikes = amountLikes;
    this._age = age;
  }

  // Метод для зміни тексту поста на інший

  updateText(newText) {
    this._text = newText;
  }

  //збільшити кількість вподобайок на 1 / зменшити кількість вподобайок на 1.

  increaseLikes() {
    this._amountLikes += 1;
  }
  reduceLikes() {
    if (this._amountLikes > 0) {
      this._amountLikes -= 1;
    }
  }

  //render для отримання розмітки для посту
  set amountLikes(value) {
    if (typeof value !== "number" || value > Number.MAX_SAFE_INTEGER) {
      throw new RangeError(
        "Кількість лайків повинна мати максимальне безпечне"
      );
    }
    this._amountLikes = value;
  }
  get amountLikes() {
    return this._amountLikes;
  }

  //render для отримання розмітки для посту (*в методі деструктуризувати інформацію з this).

  render() {
    const { _name, _author, _text, _dateAdded, _amountLikes, _age } = this;
    document.write(`
      <article>
        <h2>${_name}</h2>
        <p>${_text}</p>
        <p>Автор: ${_author}</p>
        <p>Дата виведення: ${_dateAdded}</p>
        <p>Кількість лайків: ${_amountLikes}</p>
        <p>Вік: ${_age}</p>
      </article>`);
  }
}
try {
  const myPost = new Post(
    1,
    "Misha",
    "Test",
    "Вивченя мови програмуваня Js",
    "01.06.2024",
    999,
    "18"
  );
  myPost.render();
  myPost.reduceLikes();
  myPost.increaseLikes();
  console.log(myPost);
} catch (error) {
  console.log(error);
}
