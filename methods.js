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
  newarray.length = this.length; //set length
  //for the length of this array
  for (let i = 0; i < this.length; i++) {
    newarray[i] = this[i]; //copy the vals into new array
    callbackFn(newarray[i]); //get the array back
  }
};




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


