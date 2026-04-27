'use strict';


// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список



// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;



// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.



// Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.



// Результат:

// У вас є ваш командний проєкт, який наповнюється, в ньому розв'язані задачі по 7-8 модулям, можливо навіть з кількома варіантами вирішення.
// Код розміщений у репозиторії на GitHub, що забезпечить правильну організацію проєктів і домашніх завдань.




//  ...............................



// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

//   ......................  ФАЙЛ   index4.html

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Page 2</title>
//     <link rel="stylesheet" href="./css/styles.css" />

//     <!-- <script src="./js/lesson-4.js" defer></script> -->
//   </head>
//   <body>


//  <a class="back-link" href="./index.html">Go back</a>

// <!-- / Зробити перемикач теми. Зберігати тему у локальному сховище.
// // При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// // Додати класи для змін тем -->

    

// <h1 class="title">Список тасок</h1>
//     <p class="text">Вітаємо в вашим списочку</p>
  

//         <div class="checkbox-thumb">
//       <input type="checkbox" id="checkbox" class="checkbox" />
//       <label class="theme-toggle" for="checkbox"></label>
//       <div class="checkbox-circle"></div>
   

// <script type="module" src="./js/lesson-4.js" defer></script>

//   </body>
// </html>


//   ......................



// const checkbox = document.querySelector(".checkbox");

// const body = document.querySelector("body");
// const TOPIC_KEY = "topic";

// const darkTheme = "dark-theme";
// const lightTheme = "light-theme";

// const getTheme = localStorage.getItem(TOPIC_KEY);

// if(getTheme === darkTheme) {

//     body.classList.add("dark");
//     checkbox.checked = true;
// };

// if(getTheme === lightTheme) {

//     body.classList.add("light");
//     checkbox.checked = false;
// };

// checkbox.addEventListener("click", handle);



// function handle() {

//     if(checkbox.checked === false) {
// localStorage.setItem(TOPIC_KEY, lightTheme);
// body.classList.add("light");
// body.classList.remove("dark");
//     }

// if(checkbox.checked === true) {
// localStorage.setItem(TOPIC_KEY, darkTheme);
// body.classList.add("dark");
// body.classList.remove("light");
//     }

// }


// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #task-list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// ЗАДАЧА  

    // <form id="task-form">
    //   <input type="text" name="taskName" />
    //   <button type="submit">Додати</button>
    // </form>

    // <ul id="task-list"></ul>



    

    
    
    
    //   ......................  ФАЙЛ   index5.html
    //   ......................

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Page 2</title>
//     <link rel="stylesheet" href="./css/styles.css" />

//     <!-- <script src="./js/lesson-4.js" defer></script> -->
//   </head>
//   <body>


//  <a class="back-link" href="./index.html">Go back</a>

// <!-- / Зробити перемикач теми. Зберігати тему у локальному сховище.
// // При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// // Додати класи для змін тем -->

    

// <h1 class="title">Список тасок</h1>
//     <p class="text">Вітаємо в вашим списочку</p>
  

//         <div class="checkbox-thumb">
//       <input type="checkbox" id="checkbox" class="checkbox" />
//       <label class="theme-toggle" for="checkbox"></label>
//       <div class="checkbox-circle"></div>
   

// <script type="module" src="./js/lesson-5.js" defer></script>

//   </body>
// </html>



//   ......................