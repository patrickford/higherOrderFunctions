var products = [
  {
    name : "Scissors",
    price : 5,
    size : [6, 9],
    qty : 30
  },
  {
    name : "Mouse Pad",
    price : 10,
    color : ["Black", "Red", "White", "Blue"],
    qty : 20
  },
    {
    name : "Pens",
    price : 3,
    color : ["Black", "Red", "Purple", "Blue", "Green"],
    qty : 300
  },
    {
    name : "Envelopes",
    price : 5,
    size : ["Small", "Medium", "Large"],
    color : ["White"],
    qty : 0
  },
    {
    name : "Printer Paper",
    price : 20,
    color : ["White", "Blue"],
    qty : 50
  }
]
//copy of this array, 20% of the inventory 
//write a map.function that takes 20% 
//create a new array called shiftProducts(products)

function shiftProducts(inventory) {
	var availableProducts = filter(inventory, function(item) {
		return item.qty > 0;
	});

	var test = map(availableProducts, function(element) {
		var newElement = element; 
		newElement.qty = Math.floor(newElement.qty * .2);
		return newElement;  
	});

  return test;
}

function addTen(x) {
  return x + 10;
}

function once(addTen) {

}

var newAddTen = once(addTen);

newAddTen(7)

function once(func) {
    var alreadyCalled = false;
    var result;
    return function(){
      console.log(alreadyCalled);
      if(!alreadyCalled){
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

function addSomething(x) {
  return function(y) {
    return x + y;
  }
}
