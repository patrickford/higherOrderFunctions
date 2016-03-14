var myArray = [1,2,3,4,5];

var myObj = {
  name: "Joe",
  age: 21,
  job: "Engineer"
}

function print(value) {
  console.log(value);
}

// print(myArray[1]);

// print(myObj.age);

// print(myObj['age']);


function addTen(x) {
  return x + 10;
}

function even(x) {
  return x % 2 === 0;
}

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}

function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
}

/*
var newArray = [ [1,2,3,4,5], [4,3,2], [5,6,7,8], [8,7,6,5] ];

filter(newArray, function(element) {
  return element[0] > element[element.length-1];
})
*/

function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return result;
}

function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return result;
}

function every(collection, callback) {
  return reduce(collection, function(accumulator, element) {
    return accumulator && callback(element);
  }, true);
}

function add(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator == undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false)
}

function histogram(collection) {
  return reduce(collection, function(accumulator, element) {
    if (accumulator[element] === undefined) {
      accumulator[element] = 1;
    } else {
      accumulator[element]++;
    }
    return accumulator;
  }, {})
}

// Histogram result:
// var sample = [1,2,1,3,1,2]
// {1 : 3, 2 : 2, 3 : 1}

// Alternative to histogram using ternary expression
function histogram(collection) {
  return reduce(collection, function(accumulator, element) {
    accumulator[element] = accumulator[element] != undefined ? accumulator[element] + 1 : 1;
    return accumulator;
  }, {});
}


function pick(collection) {
  var result = {};
  if (typeof arguments[1] == "function") {
    for (var prop in collection) {
      if (arguments[1](prop)) {
        result[prop] = collection[prop];
      }
    }
  } else {
    for (var i = 1; i < arguments.length; i++) {
      if (collection[arguments[i]]) {
        result[arguments[i]] = collection[arguments[i]];
      }
    }
  }
  return result;
}


var stooges = { moe : "Moses", larry : "Lawrence", curly : "Jerome" };

function notLarry(element) {
  return element !== "larry";
}

pick(stooges, notLarry);
pick(stooges, "moe", "curly", "joe", "mary")


// arguments list example
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
}

// Closure example
function makeAdder(x) {
  return function(y) {
    return z + x + y;
  }
}


