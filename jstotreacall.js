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
