//for

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

/* --------------------------------- //while -------------------------------- */

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
/* --------------------------------- //do while -------------------------------- */

// let i = 4;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

/* -------------------------------- for...in (object) -------------------------------- */

// const person = {
//   name: "John",
//   age: 30,
//   profession: "Developer",
// };

// for (const key in person) {
//   console.log("key", key);
//   console.log("person[key]", person[key]);
//   console.log(`** ${key} : ${person[key]}`);
// }

/* ---------------------- for..of * (array) & string * ---------------------- */

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }

/* -----------------------------------  method loop ----------------------------------- */

// // حلقه for - استفاده برای تکرار بر اساس تعداد مشخص
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // حلقه while - استفاده برای تکرار بر اساس یک شرط
// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

// // حلقه do-while - استفاده برای تکرار حداقل یک بار و سپس بر اساس یک شرط
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 5);

// const person = {
//   name: "John",
//   age: 30,
//   profession: "Developer",
// };

// // حلقه for...in - استفاده برای تکرار بر روی ویژگی‌های یک شیء
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// const numbers = [1, 2, 3, 4, 5];

// // حلقه for...of - استفاده برای تکرار بر روی مجموعه‌های قابل شمارش
// for (let num of numbers) {
//   console.log(num);
// }

/* --------------------------- forEach map *array* -------------------------- */
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// const squaredNumbers = numbers.map(function (num) {
//   return num * num;
// });

// console.log("squaredNumbers", squaredNumbers);

/* ----------------------------------- // ----------------------------------- */

// مثال: محاسبه جمع اعداد از 1 تا 10 با استفاده از حلقه for
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum); // Output: 55

// // مثال: چاپ اعداد فرد از 1 تا 10 با استفاده از حلقه while
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }

// مثال: نمایش ویژگی‌های یک شیء با استفاده از حلقه for...in
// const person = {
//   name: "John",
//   age: 30,
//   profession: "Developer",
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// مثال: ضرب هر عضو یک آرایه در دو با استفاده از حلقه for...of
// const numbers = [1, 2, 3, 4, 5];
// const multipliedNumbers = [];

// for (let num of numbers) {
//   multipliedNumbers.push(num * 2);
// }

// console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]

// مثال: محاسبه مجموع اعداد در یک آرایه با استفاده از حلقه forEach
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(function(num) {
//   sum += num;
// });

// console.log(sum); // Output: 15

// مثال: تبدیل هر عضو یک آرایه به مربع آن با استفاده از حلقه map
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= 5; j++) {
//     stars += "*";
//   }
//   console.log("stars", stars);
// }
/////

// let stars = "";
// for (let i = 1; i <= 5; i++) {
//   stars += "*";
// }
// console.log("stars", stars);

// مثال: حدس عدد توسط کاربر با استفاده از حلقه while
// const targetNumber = 42;
// let guessedNumber = parseInt(prompt("Guess the number:"));
// let attempts = 1;

// while (guessedNumber !== targetNumber) {
//   guessedNumber = parseInt(prompt("Wrong guess! Try again:"));
//   attempts++;
// }

// console.log("Congratulations!42 " + attempts + " attempts.");

// مثال: شمارش تعداد واژه‌ها در یک رشته با استفاده از حلقه for...in
// const sentence = 'Hello, how are you today?';
// const words = sentence.split(' ');
// let wordCount = 0;

// for (let word in words) {
//   wordCount++;
// }

// console.log('The sentence contains ' + wordCount + ' words.');

/* ----------------------------------- // ----------------------------------- */
// مثال: جستجوی عناصر خاص در یک آرایه با استفاده از حلقه for...of
// const numbers = [10, 20, 30, 40, 50];
// const target = 30;
// let found = false;

// for (let number of numbers) {
//   if (number === target) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("The target number was found in the array.");
// } else {
//   console.log("The target number was not found in the array.");
// }

// مثال: تبدیل اعداد در یک آرایه به اعداد زوج با استفاده از حلقه map
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.map(function(num) {
//   if (num % 2 === 0) {
//     return num;
//   }
//   return num + 1;
// });

// console.log('The array with even numbers: ' + evenNumbers);

/* ------------------------------------ / ----------------------------------- */

// مثال: محاسبه فاکتوریل عدد با استفاده از حلقه for
// function factorial(n) {
//   let result = 1;

//   // حلقه برای محاسبه فاکتوریل
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5)); // Output: 120

// // مثال: پیدا کردن اولین عدد اول بزرگتر از 100 با استفاده از حلقه while
// let number = 101;

// // حلقه برای یافتن اولین عدد اول
// while (true) {
//   let isPrime = true;

//   // بررسی اول بودن عدد
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     break;
//   }

//   number++;
// }

// console.log(number); // Output: 103

/* ----------------------------------- // ----------------------------------- */

// let count = 10;

// // حلقه برای شمارش معکوس
// do {
//   console.log(count);
//   count--;
// } while (count > 0);

/* ----------------------------------- // ----------------------------------- */

// // مثال: تبدیل عناصر آرایه به حروف بزرگ با استفاده از حلقه map
// const names = ['john', 'jane', 'joe'];

// // حلقه برای تبدیل عناصر آرایه
// const capitalizedNames = names.map(function(name) {
//   return name.toUpperCase();
// });

// console.log(capitalizedNames); // Output: ["JOHN", "JANE", "JOE"]

/* ----------------------------------- // ----------------------------------- */

// // مثال: دریافت و نمایش نام‌های کاربر با استفاده از حلقه do-while
// let name;
// const names = [];

// // حلقه برای دریافت نام‌ها تا زمانی که کاربر خالی وارد نکند
// do {
//   name = prompt('Enter a name (leave empty to finish):');

//   if (name !== '') {
//     names.push(name);
//   }
// } while (name !== '');

// // نمایش نام‌ها در کنسول
// console.log('Names entered:');
// names.forEach(function(name) {
//   console.log(name);
// });

// مثال: محاسبه مجموع وزن اشیاء در یک شیء با استفاده از حلقه for...in
// const items = {
//     apple: 0.5,
//     banana: 0.3,
//     orange: 0.4,
//   };

//   let totalWeight = 0;

//   // حلقه برای محاسبه مجموع وزن
//   for (let item in items) {
//     totalWeight += items[item];
//   }

//   console.log('Total weight: ' + totalWeight + ' kg');

/* ----------------------------------- // ----------------------------------- */

// مثال: تبدیل اعداد در یک آرایه به مکعب با استفاده از حلقه map
// const numbers = [1, 2, 3, 4, 5];

// // حلقه برای تبدیل اعداد به مکعب
// const cubes = numbers.map(function (number) {
//   return Math.pow(number, 3);
// });

// console.log("Cubes: " + cubes);

/* ----------------------------------- // ----------------------------------- */
// مثال: تولید الگوی ستاره‌ای با استفاده از حلقه for
// const rows = 5;

// // حلقه برای تولید الگو
// for (let i = 1; i <= rows; i++) {
//   let pattern = '';

//   // حلقه داخلی برای تولید الگو در هر سطر
//   for (let j = 1; j <= i; j++) {
//     pattern += '* ';
//   }

//   console.log(pattern);
// }

/* ----------------------------------- // ----------------------------------- */
// function fibonacciWithFor(n) {
//   let fib = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib;
// }

// var fibonacciSequence = fibonacciWithFor(10);
// console.log(fibonacciSequence);

// /* ----------------------------------- // ----------------------------------- */
// function displayMultiples(num) {
//     // حلقه برای محاسبه مضرب‌ها
//     for (var i = 1; i <= 10; i++) {
//       // ضرب "num" در "i" و چاپ نتیجه
//       var multiple = num * i;
//       console.log(multiple);
//     }
//   }

//   // فراخوانی تابع با عدد ورودی 5
//   displayMultiples(5);
