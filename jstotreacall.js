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

// E. Driver's Ed
//Make a variable that holds a person's age; be semantic
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = " ";
if (age >= 16) {
    console.log("Here are the keys");
}else (console.log("Sorry you're too young."))


// II. Loops
// Remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

    // A. The basics
    // Write a loop that will print out all the numbers from 0 to 10, inclusive
    // Write a loop that will print out all the numbers from 10 up to and including 400
    // Write a loop that will print out every third number starting with 12 and going no higher than 4000
    
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }

    for (let j = 10; j <= 400; j++){
        console.log(j);
    }

    for (let k = 12; k <= 4000; k++){
        if (k % 3 === 0)
        console.log(k);
    }

//     B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1; i <= 100; i++){
    if ([i] % 2 === 0)
    console.log(i + " " +"<--is an even number");
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i++){
    if(i % 3 == 0){
        console.log(i + " " + " I found a 3. Three is a crowd");
    } if(i % 5 == 0) {
        console.log(i + " " + "I found a 5. High five");
  } 
}


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called  bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bank_account = 0;
for (i = 0; i < numbers.length; i++){
    bank_account += numbers[i];
    console.log(bank_account);//55
}

let newPay = 0;
for (i = 0; i < 100; i++){
    newPay += [i] * 2;
    console.log(newPay);//9900
}