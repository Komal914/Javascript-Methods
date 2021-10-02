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
//Maps the array into a new array with all the same vals
Array.prototype.myMap = function (callbackFn) {
  let newarray = []; //create an empty array

  //for the length of this array
  for (let i = 0; i < this.length; i++) {
    newarray[i] = callbackFn(this[i]);
    console.log("new array: ", newarray);
  }
  return newarray;
};

// const array1 = [1, 4, 9, 16];
// // pass a function to map
// const map1 = array1.myMap((x) => x * 2);
// console.log(map1);
// expected output: Array [2, 8, 18, 32]

// FILTER //
//creates a new array with only the vals that fit the call back func's conditions
Array.prototype.myFilter = function (callbackFn) {
  let newarray = []; //create an empty array
  //loop through each element in original array
  for (let i = 0; i < this.length; i++) {
    //if the function's elements match callbackfn's reqs, isTrue is true
    let isTrue = callbackFn(this[i]);
    if (isTrue == true) {
      newarray.push(this[i]); //if condition is met, push val into newarray
    }
  }
  return newarray; //return filtered array
};

// SOME //
//checks if a property is true for at least one element in the array
Array.prototype.mySome = function (callbackFn) {
  //loops through my array
  for (let i = 0; i < this.length; i++) {
    let isTrue = callbackFn(this[i]); //isTrue is true when callbackfn's conditions are met
    if (isTrue == true) {
      return true; //return true if an element meets the reqs
    }
  }
  return false; //at the end of the for loop so no vals met the condition, val must be false
};

// EVERY //
//if all the elements of the array meet the callbackFn's funcs, will return true or else false
Array.prototype.myEvery = function (callbackFn) {
  //loops through my array
  for (let i = 0; i < this.length; i++) {
    //check if any val is false
    let isFalse = callbackFn(this[i]); //holds if true or false for callbackfn
    if (isFalse == false) {
      //check for false, because if any one val is false, the whole thing is false because we want all elements to be true
      return false;
    }
  }
  return true; //otherwise return true
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, anotherVal) {
  let accumulator = 0;
  //loop through the array
  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    //update accumulator with the func
    accumulator = callbackFn(accumulator, currentValue);
  }
  //if another val is provided
  if (anotherVal != undefined) {
    //update accumulator with another  val
    accumulator = callbackFn(accumulator, anotherVal);
  }
  return accumulator;
};

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
// console.log("Correct:", array1.reduce(reducer));
// // expected output: 10
// console.log("Mine:", array1.myReduce(reducer));
//
// // 5 + 1 + 2 + 3 + 4
// console.log("Correct 2:", array1.reduce(reducer, 5));
// console.log("MINE", array1.myReduce(reducer, 5));

// expected output: 15

//*******************Start of Sanjidah Abdullah's functions***************
// INCLUDES//
// determines whether an array includes a certain value among its entries, returning true or false as appropriate
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) {
    // invalid fromIndex since index is greater or equal to length of array
    return false;
  }
  if (fromIndex < 0) {
    // negative starting index value
    fromIndex = this.length + fromIndex; // compute fromIndex for negative value
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true; // value found
      }
    }
  } else {
    // positive starting index value where fromIndex > 0
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true; // value found
      }
    }
  }
  return false; // value not found
};

// Test
// const arr = [1,2,3,4,5];
// console.log("myIncludes:");
// console.log(arr.myIncludes(5));      // true
// console.log(arr.myIncludes(3,-2));   // false

// console.log("includes:");
// console.log(arr.includes(5));        // true
// console.log(arr.includes(3,-2));     // false

// INDEXOF //
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) {
    // invalid fromIndex since index is greater or equal to length of array
    return -1; // array will not be searched
  }
  if (fromIndex < 0) {
    // negative starting index value
    fromIndex = this.length + fromIndex; // compute start index for negative value
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i; // value found
      }
    }
  } else {
    // positive starting index value where fromIndex > 0
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i; // value found
      }
    }
  }
  return -1; // value not found
};

// Test
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.myIndexOf('bison'));
// console.log(beasts.indexOf('bison'));

// console.log(beasts.myIndexOf('bison', 2));
// console.log(beasts.indexOf('bison', 2));

// PUSH: adds one or more elements to the end of an array and returns the new length of the array.//
Array.prototype.myPush = function (...args) {
  let arg_i = 0;
  let length = this.length;

  // last element of 'this' is at length - 1
  for (let i = length; i < length + args.length; i++) {
    this[i] = args[arg_i]; // add the values of passed in array to 'this' array
    arg_i++; // increment index of passed in array (args)
  }

  return this.length;
};

// LASTINDEXOF //
// returns the last index at which a given element can be found in the array, or -1 if it is not present.
Array.prototype.myLastIndexOf = function (
  searchElement,
  fromIndex = this.length - 1
) {
  if (fromIndex >= this.length) {
    for (let i = fromIndex; i >= 0; i--) {
      // iterating from end of array
      if (this[i] === searchElement) {
        return i; // value found
      }
    }
  } else if (fromIndex < 0) {
    fromIndex = this.length + fromIndex; // compute start index for negative value
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i; // value found
    }
  }
  return -1; // value not found
};

// Test
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));    // expected output: 3
// console.log(animals.myLastIndexOf('Dodo'));  // expected output: 3

// console.log(animals.lastIndexOf('Dodo',-2));    // expected output: 0
// console.log(animals.myLastIndexOf('Dodo',-2));  // expected output: 0

// KEYS //
Object.grabKeys = function () {};

// VALUES //
Object.grabValues = function () {};

//********************Test***********
// const isBelowThreshold = (currentValue) => currentValue < 10;
//
// const array1 = [1, 30, 39, 29, 10, 13];
//
// console.log("VAL", array1.every(isBelowThreshold));
// console.log("MYVAL", array1.myEvery(isBelowThreshold));
