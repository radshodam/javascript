// const promisify = (item, delay) =>
//   new Promise((resolve) => setTimeout(() => resolve(item), delay));

// const a = () => promisify(1, 1000);
// const b = () => promisify(2, 3000);

// async function parallel() {
//   const promises = [a(), b()];
//   const [outPut1, outPut2] = await Promise.all(promises);
//   return `parallel is done ${outPut1} & ${outPut2}`;
// }

// parallel().then((result) => {
//   console.log(result);
// });

/* ----------------------------------- // ----------------------------------- */

// Promise by Race
// const promisifyByRace = (item, delay) => {
//   return new Promise((resolve) => setTimeout(() => resolve(item), delay));
// };

// const a = () => promisifyByRace("a", 22000);
// const b = () => promisifyByRace("b", 2000);

// async function race() {
//   const promises = [a(), b()];
//   const output1 = await Promise.race(promises);
//   return `race is done: ${output1}`;
// }

// // race.then((res) => console.log(res));
// race().then((result) => {
//   console.log(result);
//   // Output: race is done: a
// });

/* ---- // ---- */
// Promise by Race
// The settled value or reason of the resulting
// promise will be the value or reason of the first promise that settles.
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("promise 1"), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise2 rejected");
//   }, 3000);
// });

// Promise.race([promise1, promise2]).then((result) => console.log(result));

/* ----------------------------------- // ----------------------------------- */

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { id: 1, name: "mohamad" };
//       if (user) {
//         // console.log("first");
//         resolve(user);
//       }
//       reject("no data");
//     }, 2000);
//   });
// }

// fetchUser()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Data fetching Finish"));

/* ----------------------------------- // ----------------------------------- */

// const data1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data1");
//     }, 1000);
//   });
// };

// const data2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data2 ");
//     }, 3000);
//   });

// Promise.all([data1(), data2()])
//   .then((result) => console.log("resData", result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finished"));

/* ----------------------------------- // ----------------------------------- */

// function performAsyncOperation() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Operation completed.");
//     }, 3000);
//   });
// }

// async function doSomething() {
//   console.log("start");

//   try {
//     const data = await performAsyncOperation();
//     console.log(data);
//   } catch (error) {
//     console.error("Error", error);
//   } finally {
//     console.log("finished ");
//   }
// }

// doSomething();

/* ----------------------------------- // ----------------------------------- */

// function performAsyncTask() {
//   return new Promise((resolve, reject) => {
//     let progress = 0;
//     const timer = setInterval(() => {
//       progress += 1;
//       console.log("progress", progress);
//       if (progress === 2) {
//         clearInterval(timer);
//         resolve(() => resolve("TASK COMPLETED"));
//       }
//       resolve;
//     }, 1000);
//   });
// }

// performAsyncTask()
//   .then((res) => console.log(res))
//   .catch((error) => console.log("error"))
//   .finally(() => console.log("finished"));

/* ----------------------------------- TRY CATCH ----------------------------------- */
// control by try catch

// function divideNumbers(a, b) {
//   try {
//     if (b === 1) {
//       throw new Error("Division by One is not allowed");
//     }
//     const result = a / b;
//     console.log("result: ", result);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// divideNumbers(2, 5);
// divideNumbers(2, 1);

/* ----------------------------------- Throw Error  ----------------------------------- */

// function readFile(filename) {
//   try {
//     if (typeof filename !== "string") {
//       throw new Error("Invalid filename.Stopped");
//     }
//     console.log(`File '${filename}' read successfully.`);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// readFile("Lorenzo");
// readFile(12);

/* ----------------------------------- // ----------------------------------- */

// تابعی که Promise بازمیگرداند

// function fetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("داده‌ دریافت شد.");
//     }, 2000);
//   });
// }

// // استفاده از async/await برای صبر تا دریافت داده و نمایش آن
// async function getData() {
//   try {
//     console.log("در حال دریافت داده..1.");
//     const result = await fetchData1(); // انتظار برای دریافت داده
//     console.log(result); // نمایش داده
//   } catch (error) {
//     console.log("خطا:", error);
//   }
// }

// getData();

/* ----------------------------------- // ----------------------------------- */
// تابعی که Promise بازمیگرداند

// function fetchData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       console.log("در حال دریافت داده..2.");

//       if (success) {
//         resolve("داده‌ها دریافت شد.");
//       } else {
//         reject("خطا در دریافت داده.");
//       }
//     }, 2000);
//   });
// }

// // استفاده از Promise و then/catch برای دریافت و نمایش داده
// fetchData2()
//   .then((result) => {
//     console.log(result); // نمایش داده
//   })
//   .catch((error) => {
//     console.log("خطا:", error);
//   });

/* ----------------------------------- Callback function ----------------------------------- */
// function fetchData(fnCallback) {
//   setTimeout(() => {
//     const data = "get data";
//     fnCallback(data);
//   }, 2000);
// }
// function displayData(data) {
//   console.log("displayData", data);
// }
// fetchData(displayData);

/* --------- //---------- */

// function fetchUsers(url, callback) {
//   // ارسال درخواست به سرور و دریافت نتیجه
//   // در اینجا فرض بر این است که درخواست AJAX انجام می‌شود و نتیجه به عنوان پارامتر به callback function ارسال می‌شود
//   const result = "داده‌ها از سرور دریافت شد.";
//   callback(result);
// }

// function displayData(data) {
//   console.log(data);
// }
// fetchData("https://example.com/api/data", displayData);

/* ----------------------------------- Flow Control callback ----------------------------------- */

// function fetchData(callback) {
//   setTimeout(() => {
//     const result = "result items";
//     callback(result);
//   }, 2000);
// }

// function processData(data, callback) {
//   setTimeout(function () {
//     const processedData = data.toUpperCase();
//     callback(processedData);
//   }, 1000);
// }

// function displayResult(result) {
//   console.log(result);
// }

// fetchData(function(data) {
//     processData(data, displayResult);
//   });

/* ----------------------------------- //callback ----------------------------------- */

// function fetchUserData(callback) {
//   setTimeout(function () {
//     const userData = { name: "John", age: 30 };
//     callback(userData);
//   }, 2000);
// }

// function displayUserData(userData) {
//   console.log(`name: ${userData.name}, age: ${userData.age}`);
// }

// fetchUserData(displayUserData);

//* ----------------------------------- Promise ----------------------------------- */

// function fetchUserData() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const userData = { name: "John", age: 30 };
//       resolve(userData);
//     }, 2000);
//   });
// }

// async function displayUserData() {
//   const userData = await fetchUserData();
//   console.log(`نام: ${userData.name}, سن: ${userData.age}`);
// }

// displayUserData();

/* ----------------------------------- setInterval ----------------------------------- */

// let counter = 0;

// function incrementCounter() {
//   counter++;
//   console.log('Counter:', counter);

//   if (counter === 5) {
//     clearInterval(intervalId);
//     console.log('Interval stopped.');
//   }
// }

// const intervalId = setInterval(incrementCounter, 1000);
/* ----------------------------------- //setInterval ----------------------------------- */

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter++, console.log("Counter:", counter);
//   if (counter === 5) {
//     clearInterval(intervalId);
//     console.log("Interval stopped.");
//   }
// }, 1000);

/* ----------------------------------- setTimeout ----------------------------------- */

// function showNotification(message) {
//   const notification = document.createElement("div");
//   notification.textContent = message;
//   notification.classList.add("notification");

//   document.body.appendChild(notification);

//   setTimeout(function () {
//     document.body.removeChild(notification);
//   }, 3000);
// }

// showNotification("Hello, world!");

/* ----------------------------------- setInterval & setTimeout ----------------------------------- */
let counter = 0;

// تابعی که هر یک ثانیه صدا زده می‌شود
function incrementCounter() {
  counter++;
  console.log(counter);
}

// تنظیم زمانبندی تکراری هر یک ثانیه برای فراخوانی تابع
const intervalId = setInterval(incrementCounter, 1000);

// متوقف کردن تکرار پس از ۵ ثانیه
setTimeout(() => {
  clearInterval(intervalId);
  console.log("تکرار متوقف شد.");
}, 5000);

/* ----------------------------------- // ----------------------------------- */