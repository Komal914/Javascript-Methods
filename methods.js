//*******************Start of Komal Kaur's functions***************
// FOR EACH //
// To access each element in the array, pass in a func to be applied
Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) continue; //if my val is not defined, skip
    callbackFn(this[i], i, this); //
  }
};

// //Test
// const arr = [1, 2, 3, 4, 5];
// //arr.forEach((element) => console.log(element));
// console.log("For MYeach:");
// arr.myEach((element) => console.log(element));
//
// console.log("Foreach:");
// arr.forEach((element) => console.log(element));


// MAP //
Array.prototype.myMap = function () {};

// FILTER //
Array.prototype.myFilter = function () {};

// SOME //
Array.prototype.mySome = function () {};

// EVERY //
Array.prototype.myEvery = function () {};

// REDUCE //
Array.prototype.myReduce = function () {};

//*******************End of Komal Kaur's functions***************

// INCLUDES //
Array.prototype.myIncludes = function () {};

// INDEXOF //
Array.prototype.myIndexOf = function () {};

// PUSH //
Array.prototype.myPush = function () {};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {};

// KEYS //
Object.grabKeys = function () {};

// VALUES //
Object.grabValues = function () {};
