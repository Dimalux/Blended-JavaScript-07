'use strict';

//...............

// Що робити, коли Git блокує операцію "git pull", щоб не втратити незбережені (незакомічені) локальні зміни.
// "Please commit your changes or stash them before you merge.
// Aborting"  //    "Будь ласка, зафіксуйте зміни або збережіть їх перед об'єднанням.
// Переривання"

// git stash
// git pull
// git stash pop

// git stash drop   Очистити stash (якщо він залишився) - видаляє останній stash вручну, якщо pop не спрацював

// Що потрібно зробити:
// 1) Або вирішити конфлікт вручну (видалити непотрібні рядки) :
// Updated upstream — версія, яка прийшла з віддаленого репозиторію (після git pull);
// Stashed changes — ваші локальні зміни (які були в stash)

// 2) Або натиснути на кнопуа внизу зправа "Resolve in Merge editor". Кнопка "Resolve in Merge Editor" - це вбудований інструмент вирішення конфліктів. 
// При натисканні відкривається спеціальний режим злиття "Merge Editor" (нове вікно редагування з 3-мя полями), який допомагає візуально вирішити конфлікт між трьома версіями файлу:

// - Вхідні зміни (Incoming)	Те, що прийшло з віддаленого репозиторію (після git pull);
// - Поточні зміни (Current)	Те, що було у вашому файлі до конфлікту;
// - Результат (Result)	Те, що ви оберете в результаті.

//...............


// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль :

// const bodyItem = document.querySelector("body");
// console.log(bodyItem);

// або :
// console.log(document.querySelector("body"));


//............................
//............................


// 2 - отримай елемент id="title" і виведи його в консоль;
// console.log(document.querySelector("#title"));


//............................
//............................


// 3 - отримай елемент class="list" і виведи його в консоль ^
// console.log(document.querySelector(".list"));


//............................
//............................


// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль.

// Для отримання значення data-атрибута використовується властивість "dataset", після якої через крапку пишеться ім'я атрибута БЕЗ "data-" в стилі CamelCase (дефіс (-) замінюємо на велику літеру наступного слова (camelCase)). Дефіс (-) у JavaScript є ЗАБОРОНЕНИМ символом в іменах змінних, властивостей або ідентифікаторів. Дефіс у JavaScript інтерпретується як оператор віднімання !!!
// Тобто "data-" відкидається, а інша частина імені записується як ім'я властивості об'єкта. :

// // console.log(document.dataset.topic);

// // Знаходимо всі елементи, які мають атрибут data-topic.
// // КВАДРАТНІ ДУЖКИ [] у селекторі означають, що ви шукаєте елементи ЗА АТРИБУТОМ, а не за тегом або класом.
// console.log(document.querySelectorAll("[data-topic]"));    //   NodeList(4) [li, li, li, li]

// // КВАДРАТНІ ДУЖКИ — це стандарт CSS для СЕЛЕКТОРІВ АТРИБУТІВ, який перейшов у "querySelectorAll".

// // Якщо треба знайти елемент тільки за унікальним селектором "<li data-topic="props">" (тобто в квадратні дужки я повністю копіюю атрибут і його значення з тега li - data-topic="props"), тоді :

// console.log(document.querySelector('[data-topic="props"]'));    //  li


//......

// // Так і для кнопки (в квадратні дужки копіюю атрибут і його значення з тега button - type="submit") можна написати :
// //  <button type="submit" class="contact-form-btn js-contact-form-submit">

// console.log(document.querySelector('[type="submit"]'));
// //......

// // Якщо було б завдання "Знайти всі елементи, які мають будь-який атрибут id", тоді по аналогії :  
// console.log(document.querySelectorAll("[id]"));


//............................
//............................


// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль :

// console.log(document.querySelector("[data-topic]"));   //  <li data-topic="navigation">

// // document.querySelector()  -	Повертає перший елемент, що відповідає селектору
// // "[data-topic]"  -	СЕЛЕКТОР АТРИБУТА — шукає елементи з атрибутом data-topic


//............................
//............................


// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const arrElement = document.querySelectorAll("[data-topic]");
// console.log(arrElement);

// const numberElement = arrElement.length;     
// console.log(numberElement);    //   4    

// const lastElement = arrElement[numberElement - 1]   
// console.log(lastElement);     //     dataset: DOMStringMap {topic: 'manipulation'}

// // або :

// // const lastElement = arrElement[arrElement.length - 1];


//............................
//............................


// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// // Знаходимо елемент h1 :
// const h1Element = document.querySelector('h1');

// // Знаходимо його наступного сусіда (next sibling). Якщо використати "nextElementSibling", він одразу візьме наступний HTML-елемент :
// const nextSibling = h1Element.nextElementSibling;

// console.log('Наступний сусідній елемент для h1:', nextSibling);


//............................
//............................


// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль :

// const h3Elements = document.querySelectorAll("h3");
// console.log(h3Elements);   // це ПСЕВДОМАСИВ - методи не працюють !!!  (тільки працює метод forEach(callback), item(index), entries(), keys(), values())

// // Варіант-1  (метод "forEach")
// // Перетворюємо ПСЕВДОМАСИВ на звичайний МАСИВ :
// h3Elements.forEach(element => console.log(element.textContent));

// // Варіант-2:
// // Перетворюємо ПСЕВДОМАСИВ на звичайний МАСИВ :
// // [...h3Elements].map(item => console.log(item.textContent));


//............................
//............................


// 9 - для кожного елемента h3 додай class="active", який змінить колір заголовка на червоний колір :

// const h3Elements = document.querySelectorAll("h3");

// const h3ElementsNew = [...h3Elements].map(item => {
//     item.classList.add("active");
// return item;
// });

// console.log(h3ElementsNew);


//............................
//............................


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль :

// Використовуємо СЕЛЕКТОР АТРИБУТА  "[data-topic='navigation']" :
// !!!   ЗВЕРНИ УВАГУ на лапки - м/б РІЗНІ  !!!
// const itemElement = document.querySelector("[data-topic='navigation']");

// console.log(itemElement);    //   <li data-topic="navigation">...</li>


//............................
//............................


// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим :

// const itemElement = document.querySelector("[data-topic='navigation']");

// // Додаємо до елемента інлайн-стиль :
// itemElement.style.backgroundColor = "yellow";

// // // Якщо потрібен не фон, а колір тексту :
// // itemElement.style.color = "red";  // колір тексту


//............................
//............................


// 12 - у елемента data-topic="navigation" знайди елемент "р" і зміни його текст на "Я змінив тут текст!" :

// // Варіант-1 :
// const itemElementText = document.querySelector("[data-topic='navigation'] p");

// // // Варіант-2 :  або в два етапи :
// // const itemElement = document.querySelector("[data-topic='navigation']");
// // const itemElementText = itemElement.querySelector("p");


// itemElementText.textContent = "Я змінив тут текст!";


//............................
//............................


// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут "data-topic" має значення, яке зберігається у змінній currentTopic і виведи його в консоль;


// // Варіант МІЙ :
// const currentTopic = "manipulation";

// const itemElements = document.querySelectorAll("[data-topic]");

//  console.log(itemElements);   //   NodeList(4) [ li, li, li, li ]
 
//  const result = [...itemElements].find(item => item.dataset.topic === currentTopic);

//  console.log(result);    // де <h3>Створення та видалення елементів</h3>
 
// //.......

// // // Варіант чат  (Прямий селектор через ШАБЛОННИЙ РЯДОК) :
// //  const currentTopic = "manipulation";
// //  const result = document.querySelector(`[data-topic="${currentTopic}"]`);
// //  console.log(result);


//............................
//............................


// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним :

// const currentTopic = "manipulation";
// const result = document.querySelector(`[data-topic="${currentTopic}"]`);    // де <h3>Створення та видалення елементів</h3>

// result.style.backgroundColor = "blue";


//............................
//............................


// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль :

// // <h3 class="completed">Властивості та атрибути</h3>

// const title = document.querySelector("h3.completed");
// console.log(title.textContent);   //  Властивості та атрибути


//............................
//............................


// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed" :

// </li>
//  <li data-topic="props">
//  <h3 class="completed">Властивості та атрибути</h3>
//  <p>
//  elem.textContent, elem.classList, elem.style, elem.hasAttribute(name),
//  elem.getAttribute(name), elem.setAttribute(name, value),
//  elem.removeAttribute(name)
//  </p>
//  </li>


// const title = document.querySelector(".completed");
// console.log(title);    //   <h3 class="completed">Властивості та атрибути</h3>


// // Щоб знайти батьківський елемент і видалити li, потрібно використати властивість parentElement (або parentNode) :

// //............

// // Варіант-1 :
// // Піднімаємось до батьківського елемента "li" :
// const listItem = title.parentElement;
// console.log(listItem);


// // Видаляємо знайдений "li" :
// listItem.remove();

//............

// // Варіант-2  (ланцюжком) :
// document.querySelector(".completed").parentElement.remove();

//............

// ПОЯСНЕННЯ :

// 1)  title.parentElement — повертає батьківський елемент (li) ;

// 2)  .remove() — видаляє елемент з DOM.


//............................
//............................


// 17 - після заголовка "h1" (перед списком) додай новий елемент "p" і задай йому наступний текст "Об'єктна модель документа (Document Object Model)" :


// //  <h1 id="title">Базові операції з DOM</h1>
// //  <ul class="list"></ul>

// const listTitle = document.querySelector("#title");

// listTitle.insertAdjacentHTML("afterend", "<p>Об'єктна модель документа (Document Object Model)</p>");



//............................
//............................


// 18 - додай новий елемент "li" списку у кінець списка "ul", його заголовок "h3" це - "Властивість innerHTML" а опис "p" - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент "li" потім наповнити "h3" та "p" і готову "li" закинути у кінець списку :


// // <ul class="list"></ul>

// const list = document.querySelector(".list");

// const stringNew = "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>";

// // Варіант-1 -   "innerHTML +=" ПОВНІСТЮ ПЕРЕЗАПИСУЄ весь вміст "ul", просто додаючи ваш новий рядок в кінець :
// list.innerHTML += stringNew;

// .............................

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// // Варіант-2 -  Альтернативний правильний варіант (БЕЗ ПЕРЕЗАПИСУ) :
// // list.insertAdjacentHTML("beforeend", stringNew);


// .............................

// ПРИМІТКА :

// ПОЯСНЕННЯ-12-4-4   Створення та видалення елементів.      (дивись рядок 969  -  00-TEST-Dima-git / modul-7.js)
//                    Властивість innerHTML   (встановлює або отримує HTML-вміст елемента)
//                    КОНКАТЕНАЦІЯ (додавання) вмісту всередині елемента ".innerHTML += htmlString;"

// Важливі наслідки !!!
// Хоча візуально здається, що ми просто ДОДАЄМО НОВИЙ ВМІСТ, насправді:
// - весь HTML всередині article повністю перепаровується (парситься заново);
// - будь-які раніше прив'язані обробники подій до дочірніх елементів будуть втрачені;
// - посилання на існуючі DOM-вузли, які ви зберегли в змінних, стануть недійсними;
// - При використанні конкатенації з "innerHTML +=" додаємо новий HTML-код САМЕ В КІНЕЦЬ, після всіх існуючих дочірніх елементів.

// Приклад :  додавання (ПЕРЕЗАПИСУВАННЯ / ПОВНА ЗАМІНА) до елемннту "article" ще 2-х дочірних шаблонних рядків "<p>" і "<a>" :
// // <article class="article">
// //   <h2>Article title</h2>
// // </article>

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// article.innerHTML += htmlString;

// .............................

// 20 - очисти список :

// // <ul class="list"></ul>

// const list = document.querySelector(".list");

// //   Очищаємо весь вміст "ul" :
// list.remove();

//............................
//............................

// Завдання 2:

// 1) Створіть контейнер div (з класом number-container) в HTML-документі ;
// 2) та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// 1) Створюємо контейнер div (з класом number-container) в HTML-документі :

// const numberContainer = document.createElement("div");

// numberContainer.classList.add("number-container");

// //.............

// // 2)  Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві :
// document.body.append(numberContainer);

// //.............

// // 3) Наповнюємо контейнер "numberContainer" 100 внутрішніми контейнерами (класом "number") з рандомними числами від 1 до 100 :

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// // Варіант-1 -  через МАСИВ :
// // const arrContainer = [];

// // console.log(arrContainer);

// // let count = 0;
// // while (count < 100) {
// //   count += 1;
// // arrContainer.push(`<div class="number">${randomNumber()}</div>`)
// // }

// // numberContainer.insertAdjacentHTML("afterbegin", arrContainer.join(""));

// // Варіант-2 -  КОНКАТЕНАЦІЯ рядків (рядки з'єднуються в один довгий рядок) :

// let arrContainer = "";

// let count = 0;
// while (count < 100) {
//   count += 1;

//   const numberAdd = randomNumber();

//   // 4) Парні числа повинні мати ЗЕЛЕНИЙ фон (додати клас "even"). Непарні числа - ЖОВТИЙ фон (додати клас "odd") :
//   const numberAddClass = numberAdd % 2 === 0 ? "even" : "odd";

// arrContainer += `<div class="number ${numberAddClass}">${numberAdd}</div>`;
// }

// numberContainer.insertAdjacentHTML("afterbegin", arrContainer);

// console.log(numberContainer);


//............................
//............................


// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1) При події `input`, якщо користувач ввів в поле більше 6-ти символів то додати клас `success`. Якщо ж символів менше аніж 6-ть, то клас `error` :

// 2)  При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3) При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4)  При події `submit`. Відміни поведінку браузера по змовчуванню ;
// 5)  Дістань данні з інпуту ;
// 6)  Дістань данні з чек боксу;
// 7) Зроби перевірку, що інпут не порожній ; 

// 8) Зроби перевірку, що нажатий чек бокс у положення true (СТАН ЧЕКБОКСА - поставлена галочка) ;

// 9) Якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення "Будь ласка ЗАПОВНІТЬ ВСІ ПОЛЯ !!!" ; 
 
// 10) Також при події інпут реалізуй додавання "ім`я користувача" у span, замість слова "Anonymous";

// 11) Якщо користувач ввів ім`я, а потім видалив, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous";


// 12) При відправці форми, очисти "інпут", верни чек бокс у положення "false", верни дефолтне значення "Anonymous" у span.



//...........


// <form class="contact-form js-contact-form">
// <input
//  name="userName"
//  type="text"
//  class="contact-form-input js-username-input"
//  data-length="8"
//  placeholder="Your name"
//  />
//  <label class="js-policy-label">
//  <input
//  type="checkbox"
//  name="accept"
//  class="contact-form-checkbox js-policy-checkbox"
//  />
//  Я <span class="js-username-output">Anonymous</span> погоджуюсь із
//  політикою конфіденційності
//  </label>
//  <button type="submit" class="contact-form-btn js-contact-form-submit">
//  Відправити
//  </button>
//  </form>

//..............

// 1) При події `input`, якщо користувач ввів в поле більше 6-ти символів то додати клас `success`. Якщо ж символів менше аніж 6-ть, то клас `error` :

// const formInput = document.querySelector(".js-contact-form .js-username-input");

// const userNameLabel = document.querySelector(".js-contact-form .js-policy-label .js-username-output");
// const userNameLabelText = userNameLabel.textContent;    //  Anonymous


// formInput.addEventListener("input", handlerInput);

// function handlerInput(event) {

// const userNameTextInput = event.target.value;

// console.log(userNameTextInput);
// console.log(userNameTextInput.length);

// if(userNameTextInput.length < 6) {
// formInput.classList.add("error");
// formInput.classList.remove("success");
// } else {
//     formInput.classList.remove("error");
//     formInput.classList.add("success");
// }
// console.log(formInput.classList.contains("error"));
// console.log(formInput.classList.contains("success"));

// // 10) При події інпут реалізуємо додавання ім`я користувача у span, замість слова "Anonymous" :

// // <label class="js-policy-label">
// // Я <span class="js-username-output">Anonymous</span> погоджуюсь із
// //  політикою конфіденційності
// //  </label>

// // const userNameLabel = document.querySelector(".js-contact-form .js-policy-label .js-username-output");
// // const userNameLabelText = userNameLabel.textContent;    //  Anonymous

// userNameLabel.textContent = userNameTextInput;

// console.log("LABEL :", userNameTextInput);

// // 11) Якщо користувач ввів ім`я, а потім видалив, на місце МАЄ ПОВЕРТАТИСЯ дефолтне знаяення "Anonymous" :
// if(userNameTextInput === "") {
// userNameLabel.textContent = "Anonymous";   
// }
// }

// //..............


// // 2)  При події `focus` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


// formInput.addEventListener("focus", handlerFocus);

// function handlerFocus(event) {

//     if(event.target.value === "") {
// formInput.style.outline = "3px solid red";
//     } else {
//         formInput.style.outline = "3px solid green";
//     }
// }

// //..............


// // 3) При події `blur` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


// formInput.addEventListener("blur", handlerBlur);

// function handlerBlur(event) {
//     if(event.target.value === "") {
// formInput.style.outline = "3px solid red";
//     } else {
//         formInput.style.outline = "3px solid lime";
//     }
// }


// const form = document.querySelector(".js-contact-form");

// console.log(form);

// form.addEventListener("submit", handlerForm);

// function handlerForm(event) {
// // 4)  При події `submit`. Відміни поведінку браузера по змовчуванню :
// event.preventDefault();
// console.log(event);

// // 5) Дістаємо данні з інпуту :
// const dataInput = event.target.elements.userName.value;
// console.log("Значення інпуту:", dataInput);

// // 6) Дістаємо данні з чек боксу :
// const dataCheckbox = event.target.elements.accept.value;
// console.log("Значення чекбоксу:", dataCheckbox);

// // 7) Робимо перевірку, що інпут не порожній  (перевірка з обрізанням пробілів) : 
// const dataInput2 = event.target.elements.userName.value.trim();
// const resultInput = dataInput2 === "" ? "Нічого не введено. Зробіть, будь ласка, запис!" : "OK";
// console.log(resultInput);

// // 8) Робимо перевірку, що чекбокс відмічений (СТАН ЧЕКБОКСА):
//     const isCheckboxChecked = event.target.elements.accept.checked;
//     console.log("Чекбокс відмічений:", isCheckboxChecked);


// // 9) Якщо користувач все виконав вірно, збери данні (userName)
// // у обьект і виведи у консоль. У разі, якщо користувач не виконав
// // одну із умов, виведи повідомлення "Будь ласка ЗАПОВНІТЬ ВСІ ПОЛЯ !!!" :
// if(dataInput2 !== "" && isCheckboxChecked) {
// const resultObj = {
// userName: dataInput2,
// };
// console.log(resultObj);
// } else {
//     alert("Будь ласка ЗАПОВНІТЬ ВСІ ПОЛЯ !!!");
// }


// // 12) При відправці форми, очисти інпут, верни чек бокс у положення 
// // false, верни дефолтне значення "Anonymous" у span :

// // const dataInput = event.target.elements.userName.value;


// // Очищає ВСІ поля форми через reset() :
// event.target.reset();   

// //  Повертаємо дефолтне значення "Anonymous" у span :
// userNameLabel.textContent = "Anonymous";   

// }
 

//.............................
//.............................


// Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// //  <p class="task-title">Task 4</p>
// //  <div>
// //  <div class="square"></div>      //   квадрат
// //  <button class="js-decrease" id="decrease">Зменьшити</button>
// //  <button class="js-increase" id="increase">Збільшити</button>
// //  </div>
// //  </div>


// const squareBox = document.querySelector(".box");
// const buttonDecrease = document.querySelector(".js-decrease");
// const buttonIncrease = document.querySelector(".js-increase");

// buttonDecrease.addEventListener("click", handlerButtonDecrease);
// buttonIncrease.addEventListener("click", handlerButtonIncrease);

// // Початковий розмір :
// let currentSize = 100;

// //  Інлайн-стиль має вищий пріоритет!!! Інлайн-стиль, встановлений через JavaScript, перевизначить CSS-стиль :
// squareBox.style.width = currentSize + "px";
// squareBox.style.height = currentSize + "px";


// function handlerButtonDecrease(event) {
//     currentSize -= 20; 
//     console.log(currentSize);
//     squareBox.style.width = currentSize + "px";
// squareBox.style.height = currentSize + "px";
// }

// function handlerButtonIncrease(event) {
//     currentSize += 20; 
//     console.log(currentSize);
//     squareBox.style.width = currentSize + "px";
// squareBox.style.height = currentSize + "px";
// }




//.............................
//.............................


// Завдання 5...:

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


//.............................
//.............................


// Завдання 5: 

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #task-list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.


//     // <form id="task-form">
//     //   <input type="text" name="taskName"  placeholder="Нове завдання" />
//     //   <button type="submit">Додати</button>
//     // </form>

//     // <ul id="task-list"></ul>


// const formTask = document.querySelector("#task-form");
// const listTask = document.querySelector("#task-list");

// // Додаємо обробник на форму :
// formTask.addEventListener("submit", handlerFormTask);

// function handlerFormTask(event) {
// event.preventDefault();
// console.log("OK");

// //  Отримуємо завдання яке ввів користувач :
// const taskAdd = event.target.elements.taskName.value.trim();
// console.log(taskAdd);

// if(taskAdd === "") {
// alert("Не має данних!!! Будь ласка заповніть поле для завданнь!");
// return;
// }

// listTask.insertAdjacentHTML("afterbegin", `<li class="list-button">${taskAdd} <button type="button" class="delete-btn">Видалити</button></li>`);


// // Знаходимо щойно створену "li" з новим завданням "taskAdd" і кнопкою "Видалити" :
// const listTaskNew = document.querySelector(".list-button");
// const deleteBtn = document.querySelector(".delete-btn");

// // Додаємо обробник на кнопку "Видалити" :
// deleteBtn.addEventListener("click", () => {
//     listTaskNew.remove();
//     console.log("Видалено:", taskAdd);
// });    

// // Очищає ВСІ поля форми через reset() :
// event.target.reset();  
// }

// Список із завданнями має бути доступним після перезавантаження сторінки :

//    !!!!!!!!!     Проблема в тому, що ви не зберігаєте завдання в localStorage. Після перезавантаження сторінки всі дані, додані через JavaScript, зникають, тому що вони існують тільки в пам'яті браузера під час поточної сесії.



//.............................
//.............................


// Завдання 6 (ментор Ivan Sinabdeev) : 
// <!--- ЗАДАЧА 1 --->  (Урок 00:20:00)
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивиться на елементи в html-розмітці)

// // <div>
// //     <h2 class="taskTitle">Задача 1</h2>
// //     <button id="alertButton">SHOW ME</button>
// //     <input id="alertInput" type="text" />
// // </div>

// const btnClick = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// console.log(input);

// //............

// // Варіант-1 (ОБРОБНИК - зовнішня іменована функція) :
// // btnClick.addEventListener("click", handlerBtnCLick);

// // function handlerBtnCLick(event) {

// // // input - це DOM-елемент, який має властивість value." input.value" - містить те, що ввів користувач (Слухач подій на input потрібен, коли ви хочете реагувати в реальному часі на кожен символ, який вводить користувач. А "input.value" - це просто поточне значення в будь-який момент) :
// // console.log(input.value.trim());   //  можна виводити в консоль
// // alert(input.value.trim());         //  можна вивести повідомлення на сторінку браузера
// // }

// //............

// // Варіант-2 (ОБРОБНИК - колбек стрілка) :
// btnClick.addEventListener("click", () => console.log(input.value.trim()));


//.............................
//.............................


// Завдання 7 (ментор Ivan Sinabdeev) : 
// <!--- ЗАДАЧА 2 --->  (Урок 00:38:00)

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома імпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст імпутів.

// // <div>
// // <h2 class="taskTitle">Задача 2</h2>
// // <button id="swapButton">SWAP ME</button>
// // <input id="leftSwapInput" type="text" value="???">
// // <input id="rightSwapInput" type="text" value="!!!"/>
// // </div>

// const buttonShap = document.querySelector("#swapButton");
// console.log(buttonShap);

// const inputLeft = document.querySelector("#leftSwapInput");
// console.log(inputLeft);

// const inputRight = document.querySelector("#rightSwapInput");
// console.log(inputRight);

// buttonShap.addEventListener("click", handlerButtonShap);

// // Варіант-1 (МІЙ - через масив) :
// function handlerButtonShap(event) {
// const inputValue = [];
// inputValue.push(inputLeft.value);
// inputValue.push(inputRight.value);

// inputLeft.value = inputValue[1];
// inputRight.value = inputValue[0];
// }

// // // Варіант-2 (чат GPT - через один посередник "temp") :
// // function handlerButtonShap(event) {
// //     const temp = inputLeft.value;
// //     inputLeft.value = inputRight.value;
// //     inputRight.value = temp;
// // }



//.............................
//.............................


// Завдання 8 (ментор Ivan Sinabdeev) : 
// <!--- ЗАДАЧА 3 --->  (Урок 01:00:00)

// При клику на кнопку текст параграфов змінюється на їх порядковый номер :

// <h2>Задача 3</h2>
// <p class="text-change">Перший абзац</p>
// <p class="text-change">Другий абзац</p>
// <p class="text-change">Третій абзац</p>
// <button id="changeText">Change</button>

// const textChange = document.querySelectorAll(".text-change");
// console.log(textChange);

// const buttonChange = document.querySelector("#changeText");
// console.log(buttonChange);

// buttonChange.addEventListener("click", handlerButtonChange);

// //............

// // Варіант-1 (МІЙ -  метод MAP) :
// function handlerButtonChange(event) {
// [...textChange].map((item, index) => item.textContent = index + 1);
// }

//...............

// !!! ПОЯСНЕННЯ: хоча метод "map" повертає новий масив і не змінює вихідний масив "textChange", текст в оригінальних тегах <p> змінився тому що "item" - це не значення в масиві, а ПОСИЛАННЯ на реальний DOM-елемент!

// Браузер створює DOM-елементи в пам'яті.
// Коли браузер читає HTML, він створює об'єкти
// Кожен <p class="text-change"> — це ОКРЕМИЙ об'єкт в пам'яті
// querySelectorAll повертає NodeList (НЕ масив!).

// DOM-елементи — це складний тип даних (об'єкти). Коли ви копіюєте масив, ви копіюєте посилання на ті самі об'єкти. Тому зміни через будь-яке посилання змінюють оригінальний DOM-елемент на сторінці.
//     const textChange = document.querySelectorAll(".text-change");
//     // textChange — це NodeList (спеціальна колекція)
//     // Вона МІСТИТЬ ПОСИЛАННЯ на DOM-елементи
//     textChange = [посилання_на_p1, посилання_на_p2, посилання_на_p3]

//     const textChange = document.querySelectorAll(".text-change");
//     // textChange — це NodeList (спеціальна колекція)
//     // Вона МІСТИТЬ ПОСИЛАННЯ на DOM-елементи
//     textChange = [посилання_на_p1, посилання_на_p2, посилання_на_p3]

// [...textChange] створює НОВИЙ масив :
// const newArray = [...textChange];
// //  Це дійсно НОВИЙ масив!
// //  Але він містить ТІ САМІ ПОСИЛАННЯ на елементи

// console.log(newArray === textChange); // false (різні масиви!)
// console.log(newArray[0] === textChange[0]); // true (той самий елемент!)


//............

// Варіант-2 (чат GPT - метод forEach) : 
// !!! ПОЯСНЕННЯ:  метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією :

// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Поелементно перебирає масив array;
// Викликає колбек-функцію для кожного елемента масиву;
// Повертає undefined, навіть якщо явно задати вираз після return.

// function handlerButtonChange(event) {
//     textChange.forEach((item, index) => {
//         item.textContent = index + 1;
//     });
// }




//.............................
//.............................





//  (!!! ПЕРЕДИВИСЬ 00:30:40)

//  (.... 00:22:40)