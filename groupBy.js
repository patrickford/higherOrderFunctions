
/*groupBy_.groupBy(list, iteratee, [context]) 
Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.

_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=> {1: [1.3], 2: [2.1, 2.4]}

_.groupBy(['one', 'two', 'three'], 'length');
=> {3: ["one", "two"], 5: ["three"]}*/
function each(collection, callback){
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for(var prop in collection){
      callback(collection[prop]);
    }
  }
}

function reduce(collection, callback, initial){
    var accumulator = initial;
    each(collection, function(element){
      if(accumulator == undefined){
        accumulator = element;
      } else {
        accumulator = callback(accumulator, element)
      }
    });
    return accumulator;
}
  
function groupBy(collection, iteratee) {
  var prop;
  return reduce(collection, function(accumulator, element){
    if (typeof iteratee == "function"){
      prop = iteratee(element);
    } else {
      prop = element[iteratee];
    }
    if (accumulator[prop]) {
      accumulator[prop].push(element);
    } else {
      accumulator[prop] = [element];
    }
    return accumulator; 
  }, {});
}

groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });