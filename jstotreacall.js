// A. Q + A
// How do we assign a value to a variable? We declare with either; let, const, or var followed by the variable name in camel case,  and then, the '=' operator , the value, semi colon.

// How do we change the value of a variable? We can reassign a new value to the variable that was previously declared as long as it wasn't a constant.

// How do we assign an existing variable to a new variable? We declare a new variable and equate it to the existing variable.

// Remind me, what are declare, assign, and define? Declare: using either let, const , or var to let js know we are about to declare a variable, assign: given a variable name, define: given a value.

// What is pseudocoding and why should you do it?writing out what we want the code to achieve to give one a general picture of the task ahead and how it could be executed. It is important because it breaks down the project in an easy to execute manner.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? It depends on the size and complexity of the project.




// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

//Solution to Part B

let firstVariable = "Hello World";
firstVariable = 5;

let secondVariable = firstVariable;
secondVariable ="Hi there";

//New value of firstVariable is 5 because just the value of the second variable was changed.
let yourName = "Anjeh"
let intro = "Hello my name is" + " " + yourName;


//C. Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');


//   D. The farm
//   Declare a variable animal. Set it to be either "cow" or something else
//   Write code that will print out "mooooo" if the it is equal to cow
//   Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//   Commit
  
let animal = "dog";
if (animal === "cow"){
    console.log("mooooo");
}else if(animal !== "cow"){
    console.log("Hey! you're not a cow");
}