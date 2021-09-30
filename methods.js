//*******************Start of Komal Kaur's functions***************
// FOR EACH //
// To access each element in the array, pass in a func to be applied
Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) continue; //if my val is not defined, skip
    callbackFn(this[i], i, this); //
  }
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
  let newarray = []; //create an empty array
  newarray.length = this.length; //set length
  //for the length of this array
  for (let i = 0; i < this.length; i++) {
    newarray[i] = this[i]; //copy the vals into new array
    callbackFn(newarray[i]); //get the array back
  }
};

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

//****************-testing-**********************

// // // //Test
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log("MYMAP:");
// arr.myMap((element) => console.log(element - 2));
//
// console.log("map:");
// arr.map((element) => console.log(element - 2));
