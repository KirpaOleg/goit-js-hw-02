// 1 task
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 2 task
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// 3 task
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// 4 task
// Change code below this line

// const fruits = ["apple", "plum", "pear", "orange"];

// 5 task
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// 6 task
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// 7 task
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// 8 task
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 9 task
// function getExtremeElements(array) {
//   // Change code below this line

//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

// 10 task
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// 11 task
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const total = message.split(" ").length * pricePerWord;

//   return total;
//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// 12 task
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// 13 task
// function slugify(title) {
//   // Change code below this line

//   slug = title.toLowerCase().split(" ").join("-");

//   // Change code above this line
//   return slug;
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// 14 task
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);

// 15 task
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// 16 task
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   const totalArray = firstArray.concat(secondArray).slice(0, maxLength);

//   // Change code above this line
//   return totalArray;
// }

// 17 task
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// 18 task
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }

// 19 task
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20 task
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// 21 task
// function findLongestWord(string) {
//   // Change code below this line
//   stringArray = string.split(" ");
//   let longWord = stringArray[0];

//   for (let i = 0; i < stringArray.length; i += 1) {
//     if (stringArray[i].length > longWord.length) {
//       longWord = stringArray[i];
//     }
//   }
//   // Change code above this line
//   return longWord;
// }

// 22 task
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// 23 task
// function filterArray(numbers, value) {
//   const newArray = [];
//   // Change code below this line
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (value < numbers[i]) {
//       newArray.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//   return newArray;
// }

// 24 task
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// 25 task
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (let array of array1) {
//     if (array2.includes(array)) {
//       newArray.push(array);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// 26 task
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;
// }

// 27 task
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// 28 task
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 29 task
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// 30 task
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31 task
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// 32 task
function includes(array, value) {
  for (let el of array) {
    if (el === value) {
      return true;
    }
  }
  return false;
}
