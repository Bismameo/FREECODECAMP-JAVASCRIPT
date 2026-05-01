// Variable declaration and assignment



let age;
console.log(age); // undefined
age = 25;
console.log(age); // undefined
age = 30;
console.log(age); // 30

// Bad variable names
let x = 10;
let y = "John";

// Good variable names
let age = 10;
let name = "John";

// Valid variable names
let age;
let _score;
let $total;

// Invalid variable names
// let 1stPlace;  starts with a number
let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30

// let thisIsCamelCase;
// let anotherExampleVariable;
// let freeCodeCampStudents;



// How Do let and const Work Differently When It Comes to Variable Declaration, Assignment, and Reassignment?
// let allows you to declare a variable that can be reassigned later, while const allows
//  you to declare a variable that cannot be reassigned after its initial assignment.

// Example of let
let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20

// Example of const
const pi = 3.14;
console.log(pi); // 3.14
// pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned

let age;
console.log(age); // undefined
age = 25;
console.log(age); // 25

// const age = 30;  Error: Missing initializer in const declaration
// You should use let when you need to declare variables that will be reassigned later. For example, tracking a changing score or updating a value over time in your program.

// Use const when you want to declare variables that should remain constant, like configuration values or settings that shouldn't be changed accidentally.

// You can also use the var keyword, but it's not as recommended anymore. The var is kind of like let, except it has a wider scope, which is more likely to cause problems in your program.

let singleQuotes = 'This is a string';
console.log(singleQuotes);
let doubleQuotes = "This is also a string";
console.log(doubleQuotes); 
let backticks = `This is a string with backticks`;
console.log(backticks);




// What Is String Concatenation, and How Can You Concatenate Strings with Variables?
// In JavaScript, working with text is an essential part of coding, and often, you'll need to combine or join pieces of text together. This process is called string concatenation.

// In this lesson, we'll focus on how string concatenation works, specifically using the + operator, the += operator, and the concat() method.

// The + operator is one of the simplest and most frequently used methods to concatenate strings. It allows you to join multiple strings or combine strings with variables that hold text.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// In this example, we used the + operator to concatenate the firstName and lastName variables along with a space (" ") to create the full name.

// One disadvantage of using the + operator for string concatenation is that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

// Here is an example where a space is missing:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log(fullName); // Output: JohnDoe (no space between the names)
// Whenever you use the + operator to concatenate strings, it is important to double check for any potential spacing issues.

// If you need to add or append to an existing string, then you can use the += operator. This is helpful when you want to build upon a string by adding more text to it over time.

// Here's an example of appending one string to another using the += operator:
let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // "Hello, John!"


// It is important to remember that strings are immutable which means once a string is created you can not alter it.

// In this case, the original string of Hello is not modified. Instead, greeting now references the new string of Hello, John!

// Another way you can concatenate strings is to use the concat() method.

// Before we begin learning about the concat() method, it is important to first understand what a method and a function are at a higher level.

// In programming, a function is a reusable block of code that performs a specific task and can be called with various inputs. A method, on the other hand, is a type of function that is associated with an object, meaning it operates on the data contained within that object.

// In future lessons, we will dive much deeper into how functions, objects, and methods work in JavaScript. But for now, it is important to understand that JavaScript has dozens of methods you can use, like the concat() method.

// Here's an example of using the concat() method to join two strings together:



let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result); // Output: Hello World


// What Is console.log Used For, and How Does It Work?
// The prior lessons introduced you to console.log() but this lesson will dive deeper into its purpose and usage.

// In JavaScript, console.log() is a simple yet powerful tool used to display messages or output information to the browser's console. It's mostly used by developers to debug and inspect code while working on their programs.

// You can use console.log() to log text or variables to the console and ensure your code is running correctly.

// To use console.log(), you call the method with the value or message you want to output inside the parentheses. Here are some examples:


console.log("Hello, world!");

let num = 5;
console.log(num); // 5

// What Is the Role of Semicolons in JavaScript, and Programming in General?
// In JavaScript, semicolons (;) are used to indicate the end of a statement. They serve as a way to separate individual statements in your code, allowing the JavaScript engine to understand where one statement ends and another begins.

// While JavaScript does have a feature called Automatic Semicolon Insertion (ASI) that allows you to omit semicolons in certain cases, it is generally recommended to use them consistently to avoid potential issues and improve code readability.
// For example, consider the following code without semicolons:

// For example:

let variableOne = 5;  // Declare a variable and assign a value
let variableTwo = 10; // Declare another variable and assign a value


// In this code, the semicolons at the end of each line mark the end of each statement. Without them, the JavaScript engine might have trouble interpreting where one statement ends and another begins.

// Semicolons are primarily used to mark the end of a statement. This helps the JavaScript engine understand the separation of individual instructions, which is important for correct execution.


