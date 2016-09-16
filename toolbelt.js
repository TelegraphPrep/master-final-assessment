var toolbelt = {};

//1. add a method to the toolbelt object (defined above for you) that takes in an array, and passes each element and index of the array into a callback function.

toolbelt.forEach = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

/*
Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
  
  This function doesen't return annything this function just loops thought the array and passes thr value and index to the callback

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


b) What does the callback to this function return? (a string, an object, a boolean, etc.)
*/


//2. add a method to the toolbelt object that takes in an array, passes each element and index of the array into a callback function, and returns an array with the results of each call to the callback function.

toolbelt.map = function (array, callback) {
  var results = [];
  toolbelt.forEach(array, function(value, index){
    results.push(callback(value, index));
  })
  return results;
};


/*
Questions:
a) What does this function return? (a string, an object, a boolean, etc.)


-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


b) What does the callback to this function return? (a string, an object, a boolean, etc.)
*/


//3. add a method to the toolbelt object that takes in an array, and passes each element and index of the array into a callback function. Return an array of just the elements for which the callback returned true.

toolbelt.filter = function (array, callback) {
  var results = [];
  toolbelt.forEach(array, function(value, index){
    if(callback(value, index)){
      results.push(value);
    }
  })
  return results;
};


/*
Questions:
a) What does this function return? (a string, an object, a boolean, etc.)


-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


b) What does the callback to this function return? (a string, an object, a boolean, etc.)
*/ 


//4. add a method to the toolbelt object that takes in an array and returns an accumulation of the elements in the array. The method takes in three parameters: the array, the callback, and whatever you want to initialize the accumulator at. The function should loop through the array, and for each element, redefine the accumulator to whatever the callback returns. You should pass into the callback the accumulator itself and the element. The function should return the accumulator.

toolbelt.reduce = function (array, callback, accumulator) {
  toolbelt.forEach(array, function(value){
    accumulator = callback(accumulator, value);
  })
  return accumulator;
};

/*
Questions:
a) What does this function return? (a string, an object, a boolean, etc.)


-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


b) What does the callback to this function return? (a string, an object, a boolean, etc.)
*/
