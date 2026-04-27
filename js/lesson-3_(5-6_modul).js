'use strict';


// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]


// Варіант 1   Цикл "for...of"

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = [];
// for(const number of numbers) {
// numbersNew.push(number ** 2);
// }
// console.log(numbersNew);   //   [1, 4, 9, 16, 25]

//...............

// Варіант 2   forEach(callback)

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = [];

//  numbers.forEach(item => numbersNew.push(item ** 2))

// console.log(numbersNew);   //   [1, 4, 9, 16, 25]



//...............

// Варіант 3   Метод map()

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = numbers.map(item => item ** 2)

// console.log(numbersNew);   //   [1, 4, 9, 16, 25]



//..............................
//..............................


// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].


// Варіант 1   Метод forEach(callback) (це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією)   +   Операція ...spread (дозволяє зкопіювати властивості об'єкта, тобто витянути з об'єкта тіло - позбутися фігурних дужок) :

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const numbersNew = [];
// data.forEach(item => numbersNew.push(...item.values));
// console.log(numbersNew);    //   [1, 2, 3, 4, 5, 6, 7, 8, 9]

//............


// Варіант 2    Метод flatMap(callback) застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити»

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const numbersNew = data.flatMap(item => item.values)
// console.log(numbersNew);    //   [1, 2, 3, 4, 5, 6, 7, 8, 9]


//..............................
//..............................


// Завдання 3:    Метод some().  Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умові колбек-функції.

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(people.some(item => item.age < 20));    //   true



//..............................
//..............................



// Завдання 4:     Метод every()  Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// // Варіант 1
// console.log(numbers.every(item => item % 2 === 0));   //  true

// // Варіант 2  через оператор заперечення :
// console.log(numbers.every(item => !(item % 2)));       //  true



//..............................
//..............................



// Завдання 5:    Метод find(). Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється.

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(item => item % 2));   //  1



//..............................
//..............................



// Завдання 6:   Метод toSorted()

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// console.log(numbersArray.toSorted((a, b) => a - b));     //   [1, 2, 3, 4, 5]


//..............................
//..............................


// Завдання 7:      Метод toSorted((a, b) => a.localeCompare(b))  -   колбек для сортування рядків     

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));   //   ["apple", "banana", "orange", "pear"]


//..............................
//..............................


// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(users.toSorted((a, b) => a.age - b.age));


//..............................
//..............................


// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// console.log(user.filter(item => item.age > 20));


//..............................
//..............................


// Завдання 10:  Метод reduce()

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// Варіант 1   Метод reduce() з акумулятором :
// console.log(numbers.reduce((prev, item) => prev + item, 0));  //   15

// Варіант 2   Метод reduce() БЕЗ акумулятора :
// console.log(numbers.reduce((prev, item) => prev + item));  //   15


//..............................
//..............................


// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator:

 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24



// class Calculator {

//   #value;
 
// // - Метод number(value)
//  // Встановлює початкове значення для наступних обчислень.
//  // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
//   number(value) {
// this.#value = value;
// this.#value = value;
// console.log(this.#value);
// return this;
//   }

//   // - метод getResult, Повертає поточний результат усіх операцій.
//  // Не змінює значення, просто повертає його.
//  getResult() {
// console.log(this.#value);
// return this.#value;
//  }

//  // - метод add - Додає value до поточного значення.
//  // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// // УВАГА для підтримки ланцюжкових викликів :
// //  const result = calc.number(10).add(5).add(3).getResult();
// //  !!! тобто після виконання "calc.number(10)", де в середині метода є "return this", ми отримуємо на виході "calc" - і наступна дія в ланцюжку буде "calc.add(5)" з новим значенням "#value"  !!!

//  add(arg1) {
//   this.#value += arg1;  
//   console.log(this.#value);
// return this;
//  }

//   // - метод subtract - Віднімає value від поточного значення. Повертає this.
//   subtract(arg2) {
//     this.#value -= arg2;
//    console.log(this.#value);
//     return this;
//   }

// // - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// // Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// divide(arg3) {
//   if(arg3 !== 0) {
//     this.#value /= arg3;    
//       } else{console.log("Error value null");}
//          console.log(this.#value);

//     return this;
// }

// // - метод multiply -Множить поточне значення на value. Повертає this.
// multiply(arg4) {
//   this.#value *= arg4;
//    console.log(this.#value);

//   return this;
// }
// }



// // Приклад використання:
//  const calc = new Calculator();

// const result = calc
//   .number(10)   // 10   Встановлюємо початкове значення 10
//   .add(5)       // 15   Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // 12   Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // 48   Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // 24   Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // 24   Отримуємо результат: 24


 
//..............................
//..............................


// Завдання 12:

 // Напиши клас "Client" який створює об'єкт з властивостями "login" і "email".
 // Оголоси приватні властивості "#login" і "#email", доступ до яких зроби 
 // через геттер та сеттер "login" і "email"

// class Client {
// #login;
// #email;

// constructor(params) {
// this.#login = params.login;
// this.#email = params.email;
// }

// get login() {
//    return this.#login
// }

// // В сеттерах НЕ ПОТРІБНО використовувати "return" !!! 
// // Сеттер тільки встановлює значення, а повертати нічого не повинен.
// set login(loginNew) {
// return this.#login = loginNew;
// }


// get email() {
//     return this.#email
// }

// // В сеттерах НЕ ПОТРІБНО використовувати "return" !!! 
// // Сеттер тільки встановлює значення, а повертати нічого не повинен.
// set email(emailNew) {
// return this.#email = emailNew;
// }

// }


// const admin = new Client({login: "Dimalux", email: "astrallux@uj.hj"});

// console.log(admin);  //  Client {#login: 'Dimalux', #email: 'astrallux@uj.hj'}

// console.log(admin.login);   //   Dimalux
// admin.login = "Dima";
// console.log(admin.login);   //   Dima


// console.log(admin.email);   //   astrallux@uj.hj
// admin.email = "NEWastralLUX@sd.kj";
// console.log(admin.email);   //   NEWastralLUX@sd.kj


//..............................
//..............................


// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.


//   class Person {

// constructor(params) {
// this.name = params.name;
// this.age = params.age;
// this.gender = params.gender;
// this.email = params.email;
//  }
  
// getDetails() {
//      return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email
//     }
// }
//   }


// class Employee extends Person {

// constructor(params) {
// super(params)
//   this.salary = params.salary;
//    this.department = params.department;
//    }

//    getEmployeeDetails() {
//         return {
//       salary: this.salary,
//       department: this.department
//     }
//    }

// }

// const mango = new Employee({name: "Dima", age: 58, gender: "male", email: "astra@hj.hy", salary: 105000, department: "AT"});

// console.log(mango.getDetails());     //  {name: 'Dima', age: 58, gender: 'male', email: 'astra@hj.hy'}

// console.log(mango.getEmployeeDetails());  //  {salary: 105000, department: 'AT'}


//..............................
//..............................





// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error)); // "Rejected promise 2"






//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// id: Math.random()
// product.id = Date.now()
// product.id = new Date()
// product.id = Math.floor(Math.random() * 100)


// function makeProduct(name, price, callback) {

// // const product = `${name}.id ${price}`;
// const product = {
//   name,
//   price,
// id: Math.random()

// };

// return callback(product);
// };

// function showProduct(product) {
//   console.log(product);  
// }

// makeProduct("tea", 10, showProduct);






//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuantity.bind(item));


//  ....................................
//  ....................................


//TODO: № 5 на перебирання 

// 1) Зібрати в "allTopics" масив всіх предметів всіх курсів :
// 2) Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];


// ВАРІАНТ 1 - МІЙ :  за допомогою методів "flatMap", "toSorted" і циклу "for" :

// 1) Зібрати в "allTopics" масив всіх предметів всіх курсів :

// const allTopics = courses.flatMap(item => item.topics);
// console.log(allTopics);   //  (28) ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop', 'VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal', 'VSCode', 'Type system', 'Loops', 'Function', 'Git', 'Conditions', 'Classes', 'GitHub', 'DOM', 'VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub']


// 2) Виконати фільтрацію, залишивши в "uniqueTopics" тільки унікальні елементи :

// const allTopics1 = allTopics.toSorted((a, b) => a.localeCompare(b));
// console.log(allTopics1);

// let uniqueTopics = [];

// for (let i = 0; i < allTopics1.length; i += 1) {

// if (allTopics1[i] !== allTopics1[i + 1]) {
//   uniqueTopics.push(allTopics1[i]);
// }
// }

// console.log(uniqueTopics);  //  (18) ['AJAX', 'Bundlers', 'Classes', 'Conditions', 'CSS', 'DOM', 'Function', 'Git', 'GitHub', 'GitHub Desctop', 'HTML', 'Loops', 'NPM', 'Promises', 'Terminal', 'Transpiling', 'Type system', 'VSCode']

//  ..................


// ВАРІАНТ 2   МІЙ за допомогою reduce() :

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// 1) Зібрати в "allTopics" масив всіх предметів всіх курсів;
// 2) Виконати фільтрацію, залишивши в "uniqueTopics" тільки унікальні елементи;

// використовую ланцюжок методів :

// const allTopics = courses
// .flatMap(item => item.topics)
// .toSorted((a, b) => a.localeCompare(b))
// .reduce((prev, item) => 
// {
// if (item !== prev[prev.length - 1]) {prev.push(item)}
// return prev;
// }
// , []);

// console.log(allTopics);

//  ...............

// ВАРІАНТ 2-1   МІЙ за допомогою reduce() БЕЗ "return", тобто з ТЕРНАРНИМ оператором (заміна if). В зв'язку з тим, що prev.push() повертає НЕ значення, а довжину масиву, ТРЕБА  зробити push, але повернути "prev" (оператор кома) і весь вираз взяти ОБОВ'ЯЗКОВО в круглі дужки "(item !== prev[prev.length - 1] ? prev.push(item) : prev.push(""), prev)" :

// const allTopics = courses
// .flatMap(item => item.topics)
// .toSorted((a, b) => a.localeCompare(b))
// .reduce((prev, item) => 
// (item !== prev[prev.length - 1] ? prev.push(item) : prev.push(""), prev), []);

// console.log(allTopics);


//  ...............

// ВАРІАНТ 2-2   Використати "spread" оператор (створює новий масив): :

// const allTopics = courses
// .flatMap(item => item.topics)
// .toSorted((a, b) => a.localeCompare(b))
// .reduce((prev, item) => 
// item !== prev[prev.length - 1] ? [...prev, item] : prev, []);

// console.log(allTopics);


//  ..................


// ВАРІАНТ 3   МЕНТОР за допомогою КОНСТРУКТОРА (не метода!!!) "new Set(array)" :

// КОНСТРУКТОР "new Set(масив)" створює з масиву ОБ'ЄКТ, в якому всі дублікати автоматично видаляються !!!

// Операція [...new Set(allTopics)] робить наступне:
// new Set(allTopics) — створює новий об'єкт Set з масиву "allTopics"
// Set — це колекція унікальних значень (автоматично видаляє всі дублікати)
// Зберігає порядок першої появи елементів
// [...] — оператор "spread" (розпакування)
// Запаковуємо елементи Set назад у новий масив


// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];


// const allTopics = courses
// .flatMap(course => course.topics)
// .toSorted();

// console.log(allTopics);

// const uniqueTopics = [...new Set(allTopics)];
// console.log(uniqueTopics);



//  ....................................
//  ....................................



// 4. Заняття 03 (5-6 modules) відео - 16:16


//Напиши ФУНКЦІЮ КОНСТРУКТОР "User" для створення користувача з такими властивостями

//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`



// ВАРІАНТ-1 :    ФУНКЦІЯ КОНСТРУКТОР

// function User(userName, age, numbersOfPost) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   };
// }


// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();


//  .......

// ВАРІАНТ-2 :    КЛАСИ

// Сучасна альтернатива: Починаючи з ES6 (2015), в JavaScript з'явився синтаксичний цукор КЛАСИ (class). Він робить те ж саме (базується на функціях-конструкторах та прототипах), але має більш звичний для розробників з інших мов ООП-синтаксис.

//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`


// class User {

// constructor(params) {

// this.userName = params.userName;
// this.age = params.age;
// this.numbersOfPost = params.numbersOfPost;
// }

// getInfo() {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
// }
// }

// const polly = new User({ userName: "Dima", age: 58, numbersOfPost: 15 });
// console.log(polly);
// console.log(polly.getInfo());


//  ....................................
//  ....................................


// Задача 5 :

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// для перевірки
// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = "change_mail@gmail.com";
// console.log(client.getClientData.email);



// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

  
//   get email() {
//     return this.#email;
//   }  
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// const client = new Client("mango", "mango@gmail.com");

// console.log(client.login); 
// console.log(client.email); 


// client.login = "Dima";
// client.email = "dima@gmail.com";

// console.log(client.login); 
// console.log(client.email); 



//  ....................................
//  ....................................


// Задача 6 :

//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас "Animal" для тварин.

// У зоопарку повинні бути різні типи тварин (два дочірних класи): такі як ссавці (Mammal), птахи (Bird) тощо.
// Кожен тип тварин (кожен дочірній клас) повинен мати свої властивості та методи:
//  метод "getInfo" - для отримання інформації про тварину;
//  метод "feed" - для отримання інформації годівлі тварин.

//  Крім того, зоопарк (class ZOO) повинен мати:
//  метод "addAnimal" - для додавання тварин до списку;
//  метод "listAnimal"  -  для виведення списку всіх тварин.


// class Animal {
//   constructor(name, type) {
// this.name = name;
// this.type = type;
//   }

//   // метод "getInfo" - для отримання інформації про тварину :
//   getInfo() {
// return `Name animal: ${this.name}, Type animal: ${this.type}`
//   }

//   //  метод "feed" - для отримання інформації годівлі тварин :
//   feed() {
// console.log(`Feeding ${this.name}...`);
//   }
// }


// //  ...... для ССАВЦІВ :

// class Mammal extends Animal {

// constructor(name, type, food) {
//   super(name, type);
//   this.food = food;
// }


// // метод "getInfo" - для отримання інформації про тварину :

// //  super.getInfo() викликає метод батьківського класу :
// // 1) super посилається на батьківський клас Animal ;
// // 2) super.getInfo() повертає рядок з базовою інформацією: "Name animal: [name], Type animal: [type]" ;
// // 3) до результату батьківського методу додається кома та нова інформація про їжу: ", Food animal: ${this.food}"

// getInfo() {
// return `${super.getInfo()}, Food animal: ${this.food}`;
// }

// live() {
//   console.log(`Lives in ${this.name}...`);
//   }
// }

// //  ...... для ПТАХІВ :

// class Bird extends Animal {

//   constructor(name, type, wingspan) {
// super(name, type);
// this.wingspan = wingspan;
//   }  
  
//   // метод "getInfo" - для отримання інформації про тварину :
//   getInfo() {
// return `${super.getInfo()}, Wingspan animal: ${this.wingspan}`;
// }

// fly() {
//   console.log(`Flying in 20m ${this.wingspan}...`);
//   }
// }

// //  ...... створюємо клас для ЗООПАРКА :

// class Zoo {
//   constructor() {
// this.animals = [];
//   }

//   //  метод "addAnimal" - для додавання тварин до списку;
// addAnimal(animal) {
// this.animals.push(animal);
// }

// //  метод "listAnimal"  -  для виведення списку всіх тварин :
// listAnimal() {
// console.log(`Zoo animals:`);
// this.animals.forEach(animal => console.log(animal.getInfo()))
// }
// }

// //  ......

// const zoo = new Zoo();

// const lion = new Mammal("Simba", "predator", "meat");
// const eagle = new Bird("Black Eagle", "bird", 10)

// zoo.addAnimal(lion);
// zoo.addAnimal(eagle);

// zoo.listAnimal();   //  Zoo animals: 
// //   Name animal: Simba, Type animal: predator, Food animal: meat
// //   Name animal: Black Eagle, Type animal: bird, Food animal: undefined


//  ....................................
//  ....................................



// Завдання-1 :

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].


// ВАРІАНТ 1 :

// const numbers = [1, 2, 3, 4, 5]

// const numbersNew =[];
// for (let i = 0; i < numbers.length; i += 1) {

//   // Оператор (**) використовується для піднесення числа до степеня
// numbersNew.push(numbers[i] ** 2);
// }

// console.log(numbersNew);


// //  ......


// ВАРІАНТ 2 :

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const number = [];
// console.log(number);

// for (let i = 0; i < numbers.length; i ++) {
//     number.push(numbers[i] * numbers[i]); 
//     };

//     console.log(number);


// //  ......


// ВАРІАНТ 3 :

//         const numbers = [1, 2, 3, 4, 5];

//        const  numbersNew = [];
//         for (const number of numbers) {

// numbersNew.push(number ** 2);
//         }

// console.log(numbersNew);


// //  ......


// ВАРІАНТ 4 :

//         const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map(number => number ** 2));


//  ....................................
//  ....................................


// Завдання-2 :
// У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що навіть повторюваних.


// Завдання-2   ВАРІАНТ 1 (МІЙ) :

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// // список всіх предметів :
// const studentsArr = students.flatMap(student => student.courses);

// console.log(studentsArr);   //  ['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology']


// // фільтруємо список всіх предметів від дублювання:
// const result = [];

// for(let i = 0; i < studentsArr.length; i += 1) {
// if(!result.includes(studentsArr[i])) {
//   result.push(studentsArr[i]);
// }
// }

// console.log(result);  //  ['mathematics', 'physics', 'science', 'biology']


// //  ......


// Завдання-2   ВАРІАНТ 2 (чат GPT) -  Варіант з filter() та indexOf() :

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// // список всіх предметів :
// const studentsArr = students.flatMap(student => student.courses);
// console.log(studentsArr);   //  ['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology']

// const result = studentsArr.filter((student, ind, arr) => 
// arr.indexOf(student) === ind
// )
// console.log(result);    // ['mathematics', 'physics', 'science', 'biology']


// //  ......


// Завдання-2   ВАРІАНТ 3 (чат GPT) -  з Set (найсучасніший) спеціальний об'єкт у JavaScript, який:
// Зберігає тільки унікальні значення;
// Автоматично видаляє дублікати

// Створюємо Set (ОБ'ЄКТ) з масиву
// const uniqueSet = new Set(studentsArr);
// console.log(uniqueSet); 
// Set(4) {'mathematics', 'physics', 'science', 'biology'}

// Перетворюємо назад у МАСИВ (найчастіше використання)
// const result = [...uniqueSet];

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// // список всіх предметів :
// const studentsArr = students.flatMap(student => student.courses);
// console.log(studentsArr);  //  ['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology']


// const result = [...new Set(studentsArr)];
// console.log(result); // ['mathematics', 'physics', 'science', 'biology']


// //  ......


// Завдання-2   ВАРІАНТ 4  -  з reduce() :

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// // список всіх предметів :
// const studentsArr = students.flatMap(student => student.courses);
// console.log(studentsArr);  //  ['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology']

// const result = studentsArr.reduce((prev, student) => {

//   //   якщо є фігурні дужки НЕЯВНЕ ПОВЕРНЕННЯ не працює, м/б один вираз !!!
// if(!prev.includes(student)) {prev.push(student)}
// return prev
// }, [])

// console.log(result);


//  ....................................
//  ....................................


// Завдання-3 :

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].


// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const sum = data.flatMap(item => item.values);

// console.log(sum); 


//  ....................................
//  ....................................


// Завдання 4 :

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(people.some(item => item.age < 20));


//  ....................................
//  ....................................


// Завдання 5:

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// console.log(numbers.every(item => item % 2 === 0));


//  ....................................
//  ....................................


// Завдання 6:    Знайдіть перше непарне число


// Завдання 6   ВАРІАНТ 1 (МІЙ)  -   Цикл "for...of" і оператор "break" :

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// // Оголошуємо змінну, щоб присвоїти їй значення пізніше.
// let result;

// for(const number of numbers) {
// if(number % 2 !== 0) {
//   result = number;
//   break
// }
// }

// console.log(result);


//  ...........


// Завдання 6   ВАРІАНТ 2   -   Метод "find" :
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(number => number % 2 !== 0));


//  ...........


// Завдання 6   ВАРІАНТ 3  (чат GPT)  -   Класичний цикл "for" і оператор "break" :

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 !== 0) {
//     console.log(numbers[i]); // 1
//     break;
//   }
// }


//  ...........


// Завдання 6   ВАРІАНТ 4  (чат GPT)  -   цикл  "while" :

// let i = 0;
// while(i < numbers.length) {
//   if(numbers[i] % 2 !== 0) {
//     console.log(numbers[i]); // 1
//     break;
//   }
//   i++;
// }


//  ....................................
//  ....................................



// Завдання 7  -   Відсортуйте масив чисел [4, 71, 2, 5, 22, 1, 3, 15]  у порядку зростання : 

// const numbersArray = [4, 71, 2, 5, 22, 1, 3, 15];

// console.log(numbersArray.toSorted((a, b) => a - b));   //   [1, 2, 3, 4, 5, 15, 22, 71]


//  ....................................
//  ....................................



// Завдання 8  -  Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]   у порядку алфавіту : 

// const fruit = ["banana", "orange", "apple", "pear"];

// console.log(fruit.toSorted((a, b) => a.localeCompare(b)));   //   ['apple', 'banana', 'orange', 'pear']



//  ....................................
//  ....................................



// Завдання 9  -   Відсортуйте масив об'єктів ЗА ВІКОМ у порядку зростання :

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(users.toSorted((a, b) => a.age - b.age));   //   [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}]


//  ....................................
//  ....................................



// Завдання 10  -   Дано масив об'єктів. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. 

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// console.log(users.filter(user => user.age > 20));   //   [{name: "John", age: 27}, {name: "Jane", age: 31}]


//  ....................................
//  ....................................


// Завдання 11  -   Дано масив чисел [1, 2, 3, 4, 5].  Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reduce((prev, number) => prev + number, 0));


 
//  ....................................
//  ....................................



// Завдання 12:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator :

 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - Метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - Метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - Метод substruct - Віднімає value від поточного значення. Повертає this.

// - Метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

 // - Метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 

// class Calculator {

// constructor() {
// this.value = 0;
// }

// number(value) {
//   this.value = value;
//   console.log(this.value);  
//   return this;
// }

// getResult() {
// return this.value;
// }

// add(value) {
//   this.value += value;
//   console.log(this.value);  
//   return this;
// }

// substruct(value) {
// this.value -= value;
// console.log(this.value);  
// return this;
// }

// divide(value) {
// if(value !== 0) {
// this.value /= value;
// } else {throw new Error("Division by zero is not allowed");
// }
// console.log(this.value);  
// return this;
// }

// multiply(value) {
// this.value *= value;
// console.log(this.value);  
// return this;
// }
//  }

//  // Приклад використання:
//  const calc = new Calculator();

// const result = calc
//   .number(10)   //  10  Встановлюємо початкове значення 10
//   .add(5)       //  15  Додаємо 5 (10 + 5 = 15)
//   .substruct(3) //  12  Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  //  48  Множимо на 4 (12 * 4 = 48)
//   .divide(2)    //  24  Ділимо на 2 (48 / 2 = 24)
//   .getResult(); //  24  Отримуємо результат: 24

//   console.log(result); // 24


 
//  ....................................
//  ....................................



// Завдання 13 :
 // Напиши клас Client який створює об'єкт з властивостями "login" i "email".
 // Оголоси приватні властивості "#login" i "#email", доступ до яких зроби 
 // через геттер та сеттер "login" i "email" :


// class Client {
// #login;
// #email;

// constructor(login, email) {
// this.#login = login;
// this.#email = email;
// }

// get login() {
// return this.#login;
// }

// set login(newLogin) {
// this.#login = newLogin;
// }

// get email() {
// return this.#email;
// }

// set email(newEmail) {
// this.#email = newEmail;
// }
// }

// const user = new Client("Dimalux", "astrallux@com.ua");
// console.log(user);


// console.log(user.login);     // геттер "login"      Dimalux
// console.log(user.email);     // геттер "email"      astrallux@com.ua


// // Сетери викликаються через присвоєння (user.login = "DIMA"), а не через виклик функції (user.login("DIMA") ❌ Так викликають метод, а не сетер !!!) :
// user.login = "DIMA";          // cеттер "login"      
// user.email = "Dima777@hj.gt"; // cеттер "email"

// console.log(user.login);     // геттер "login"
// console.log(user.email);     // геттер "email"



//  ....................................
//  ....................................



// Завдання 14:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
 
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.



// class Person {
// constructor(params) {
// this.name = params.name;
// this.age = params.age;
// this.gender = params.gender;
// this.email = params.email;
// }
// getDetails() {
//   return {
// name: this.name,
// age: this.age,
// gender: this.gender, 
// email: this.email, 
//   }
// }
//   }

// class Employee extends Person {

// constructor(params) {
// super(params);
// this.salary = params.salary;
// this.department = params.department;
// }

// getEmployeeDetails() {
// return {
// salary: this.salary, 
// department: this.department, 
//   }
// }
// }


// const user = new Employee({name: "Dima", age: 58, gender: "male", email: "astrall@kjk.hj", salary: 50000, department: "diagnostics"});

// console.log(user);

// // Метод `getDetails()` -  повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини :
//   console.log(user.getDetails());
  
// // Метод  `getEmployeeDetails()` - повертає об'єкт з зарплатою співробітника та відділом, в якому він працює :
// console.log(user.getEmployeeDetails());



//  ....................................
//  ....................................

