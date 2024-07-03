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




// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?  Items
// Do Arrays guarantee those things will be in order? Yes as in indices
// What real-life thing could you model with an array? Names

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["roses are red", "the sky is blue", "light at the end of the tunnel"];


// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello" to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

randomThings = [1, 10, "Hello", true];
randomThings[0];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings[2]);


// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

ourClass[2];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

const myArray = [5, 10, 500, 20];
myArray.push("Aegon","klingong");
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s  big number if the number is greater than or equal to 100.

let intrgr = 5;
if (intrgr < 100){
    console.log('little number');
}else(console.log('big number'));


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log  big number.
// Otherwise, log "monkey".

let numbr = 11;
if (numbr < 5){
    console.log('little number');
}else if(numbr > 10){
    console.log('big number');
}else(console.log('monkey'));


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
 const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "Per Scholas hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];

// // Thom's closet is more complicated. Check out this nested data structure!!
 const thomsCloset = [
   [
//     // These are Thom's shirts
    "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
//     // These are Thom's pants
    "grey jeans",
     "jeans",
    "PJs"
  ],[
//     // Thom's accessories
     "wool mittens",
    "wool scarf",
    "raybans"
   ]
 ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

let firstEle = thomsCloset[0][0];
console.log(firstEle);
let thomsPants = thomsCloset[1][1];
console.log(thomsPants);
let thomsAccess = thomsCloset[2][2];
console.log(thomsAccess);
console.log('Thom is dapper in ' + " " +firstEle + ", " + thomsPants + ' and ' + thomsAccess);

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
function printGreeting() {
    return 'Hello there, Slimer';
}
console.log(printGreeting());

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool"
let sentence = printCool("Anjeh");
function printCool(name){
   
    return name + " is cool";
}

console.log(sentence);//Anjeh is cool

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
let vol = calculateCube(5);

function calculateCube(num){
    return num ** 3;
}
console.log(vol);//125