// function example1() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i); // مقدار i برابر با 5 (خارج از حلقه)
//     }, 1000);
//   }
// }

// example1();
/* ----------------------------------- // ----------------------------------- */

// function example2() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i); // مقدار i برابر با شماره فعلی حلقه
//     }, 1000);
//   }
// }

// example2();
/* ----------------------------------- // ----------------------------------- */
// function example() {
//     if (true) {
//       let x = 10;
//       const y = 20;
//       console.log(x); // 10
//       console.log(y); // 20
//     }
//     console.log(x); // خطا: x is not defined
//     console.log(y); // خطا: y is not defined
//   }
//   example()
/* ----------------------------------- // ----------------------------------- */
// function example() {
//     if (true) {
//       x = 10;
//       y = 20;
//       console.log(x); // 10
//       console.log(y); // 20
//     }
//     console.log(x); // 10
//     console.log(y); // 20
//   }
//   example();
//   console.log(x); // 10
//   console.log(y); // 20;
/* ----------------------------------- // ----------------------------------- */
// مثال ۱: تعریف متغیر بدون استفاده از کلمه کلیدی
// x = 5;
// console.log(x); // 5

// // مثال ۲: تغییر مقدار متغیر بدون استفاده از کلمه کلیدی
// x = 10;
// console.log(x); // 10

// // مثال ۳: تعریف متغیر درون یک بلوک
// if (true) {
//   y = 20;
//   console.log(y); // 20
// }
// console.log(y); // 20

// // مثال ۴: تغییر مقدار متغیر درون بلوک
// if (true) {
//   y = 30;
//   console.log(y); // 30
// }
// console.log(y); // 30

// // مثال ۵: تعریف متغیر درون یک تابع
// function example() {
//   z = 40;
//   console.log(z); // 40
// }
// example();
// console.log(z); // 40

/* ----------------------------------- // ----------------------------------- */