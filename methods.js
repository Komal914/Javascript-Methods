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

//*******************Start of Sanjidah Abdullah's functions***************
// INCLUDES//
// determines whether an array includes a certain value among its entries, returning true or false as appropriate
Array.prototype.myIncludes = function(searchElement, fromIndex = 0){
    if(fromIndex >= this.length){ // invalid fromIndex since index is greater or equal to length of array
        return false;
    }
    if(fromIndex < 0){ // negative starting index value
        fromIndex = this.length + fromIndex; // compute fromIndex for negative value
        for(let i = fromIndex ; i < this.length; i++){
            if(this[i] === searchElement){ 
                return true; // value found
            }
        }
    }
    else{ // positive starting index value where fromIndex > 0
        for(let i = fromIndex ; i < this.length; i++){
            if(this[i] === searchElement){ 
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
Array.prototype.myIndexOf = function () {};

// PUSH //
// adds one or more elements to the end of an array and returns the new length of the array
Array.prototype.myPush = function(...args){
    let arg_i = 0;
    let length = this.length;
    
    // last element of 'this' is at length - 1
    for(let i = length; i < length + args.length; i++){
        this[i] = args[arg_i]; // add the values of passed in array to 'this' array
        arg_i++;               // increment index of passed in array (args)
    }
    return this.length;
};

// Test
// const arr = [1,2,3,4,5];
// console.log("myPush:");
// console.log(arr.myPush(6,7,8)); // prints 8
// console.log(arr);               // prints [1,2,3,4,5,6,7,8]
// console.log("Push:");
// console.log(arr.push(6,7,8));   // prints 8
// console.log(arr);               // prints [1,2,3,4,5,6,7,8]


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {};

// KEYS //
Object.grabKeys = function () {};

// VALUES //
Object.grabValues = function () {};


