/* GENERAL JS KNOWLEDGE QUESTIONS:

// ARRAYS
1. How do you access the third item in an array?

  To access an element in an array you have to use bracket notation, to acceess the third element you write:

    array[2]


2. How do you loop through an array?

  To loop through an array you have to use a 'for' loop

  for(var i = 0; i < array.length; i++){
    ...
  };


// OBJECTS
1. What are the two ways you can access a particular key in an object? When do you use which and why?

  The two ways to acces a particular key in an object are:

  - Dot notation: This notation only lets you access the explicit key name of a property.

  - Bracket Notation: This notation allows access to properties using variables


2. How do you loop through an object?

  You loop through an object with a 'for in' loop

  for(var key in obj){
    ...
  };


3. What is a method?

  A method is a piece of code that is called by a name that is associated with an object


// MISC
1. What operator would you use in a conditional to represent 'OR' and what operator would you use to represent 'AND'?

  OR : ||   

  AND : &&


2. What is the difference between '=' and '==='?

  '=' is to assing values and '===' is to compare  


3. What are the data types in JavaScript? 

  - Booleans
  - Numbers
  - Strings
  - Undefined
  - Null


4. a) What is scope?

  Scope is the set of variables, objects, and functions you have access to. In JavaScript functions create it's own scope call local scope


b) What happens if you try to call a variable that's defined in the parent scope from within the child scope?

  The child scope will call the the variable since child scope have access to the global scope.

c) What happens if you try to call a variable that's defined in the child scope within the parent scope?

  In this situation the variable is not defined because you can't access a local scope from the global scope and it will show an error


// PSEUDOCODE
WITHOUT writing actual code, please write your pseudocode to demonstrate the steps you would take to solve this problem:

Prompt 1: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if EVERY number in the array is even, and false otherwise.

Prompt 2: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if ANY number in the array is even, and false otherwise.

