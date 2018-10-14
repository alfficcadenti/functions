// Returns whatever value is passed as the argument.
//
// EX: identity(6) --> 6
let identity = (val) => {
  return val;
};

// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
//
// EX: first([1, 2, 3, 4, 5, 6], 2) --> [1, 2]
// EX: first([10, 34, 68, 19]) --> 10
let first = (array, n) => {
  if(typeof n == "undefined")
      {var output = array[0]}
      else
      {var output = array.slice(0,n)};
  return output;
};

// Like first, but for the last elements. If n is undefined, return just the
// last element.
//
// EX: last([1, 2, 3, 4, 5], 2) --> [4, 5]
// EX: last([10, 34, 68, 19]) --> 19
let last = (array, n) => {
  if(typeof n == "undefined")
      {var output = array[array.length-1]}
      else
      {var output = array.slice(-n,array.length)};
  return output;
};

// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.

let each = (collection, iterator) => {
  if(typeof collection == "object" && !Array.isArray(collection))
    {
      for (key in collection) {
        iterator(coll[key]);
        }
    }

  if(Array.isArray(collection))
    {
      for (i = 0; i < collection.length; i++) {
        iterator(collection[i]);
        }
    }
};


// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// TIP: You can use a standard for loop, or you can reuse the each function from above as a helper function.
//
// EX: indexOf([1, 2, 3], 2) --> 1
// EX: indexOf([10, 20, 30], 5) --> 0
let indexOf = (array, target) => {
  output = -1;
  for (i = 0; i < array.length; i++) {
    if(target === array[i])
      {output = i;}
    };
  return output;
}
// using native method
let indexOfNative = (array, target) => {
    return array.indexOf(target);
};

// Return all elements of an array that pass a truth test.
//
// filter([1, 2, 3], (val) => {
//    val > 2
// }) --> 3

// I define a "truth test" function that will be invoked by filter:

let test = (variable) => {
	if(variable>2) {
	return true;
  };
}


let filter = (collection, test) => {
    var filtered = [];
    each(collection, function(item) {
      if (test(item)) {
        filtered.push(item);
      }
    });
    return filtered;
  };

//test: filter([1, 2, 3], test)


// Return all elements of an array that don't pass a truth test.
//
// reject([1, 2, 3, 4, 5], () => {
//    val < 3
// }) --> 4, 5
let reject = (collection, test) => {
  var filtered = [];
  each(collection, function(item) {
    if (!test(item)) {
      filtered.push(item);
    }
  });
  return filtered;
};

// Produce a duplicate-free version of the array.
//
// EX: uniq([1, 1, 2, 2, 3, 4, 5]) --> [1, 2, 3, 4, 5]

let uniq = (array) => {
  var result=[];
  each(array, function(item) {
    if (result.indexOf(item) < 0) {
      result.push(item);}
    });
  return result;
};

// Return the results of applying an iterator to each element.
// map() works a lot like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
//
// map({firstName: 'Kayla', lastName: 'Handy', age: 29}, (item) => {
//    return item[key]
// }) --> ['Kayla', 'Handy', 29]
let map = (collection, iterator) => {
  var mapped = [];
  //object
  if(typeof collection == "object" && !Array.isArray(collection)){
    each(collection, function(item) {
    mapped.push(iterator(item))
  });
};
  return mapped;
};

// TO BE TESTED


// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// EX:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
let reduce = (collection, iterator, accumulator) => {
};

// Determine if the array or object contains a given value (using `===`).
//
// contains([1, 2, 3, 4], 3) --> true
let contains = (collection, target) => {
};


// Determine whether all of the elements pass a truth test.
//
// EX: every([1, 2, 3], (item) => {
//    item < 5
// }) --> true
let every = (collection, iterator) => {
};

// Determine whether any of the elements pass a truth test.
//
// EX: some([1, 2, 3], (item) => {
//    item < 2
// }) --> true
let some = (collection, iterator) => {
};
