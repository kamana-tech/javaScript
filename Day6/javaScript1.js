 // Operators
 // Symbol used to perform operations like addition, subtraction, etc.


// Arithmetic Operators

console.log(10 + 10);  // Addition
console.log(4 - 3);    // Subtraction
console.log(10 / 10);  // Division
console.log(10 * 5);   // Multiplication
console.log(10 % 10);  // Modulus


// Logical Operators
// Logical OR (||), Logical AND (&&), Logical NOT (!)

// Logical OR
console.log(10 > 11 || 11 > 10);  // F or T = T

// Logical AND
console.log(10 > 11 && 11 > 10);  // F and T = F

// Logical NOT
console.log(!true);  // false


// Assignment Operators

let x = 5;

x += 10;

console.log(x);


// Comparison Operators

let a = 20;

console.log(10 == 10);      // true
console.log(10 == "10");    // true
console.log(10 === "10");   // false


// Ternary Operator
// condition ? "true" : "false"

let age = 22;

let result = age > 18 ? "Eligible to vote" : "Not eligible";

console.log(result);


// WAP using ternary operator to check if user is passed

let marks = 45;

let Result = marks >= 40 ? "Passed :)" : "Failed :(";

console.log(Result);


// Calculate subtotal and discount
// Price = 1000, Quantity = 3, Discount = 10%

let price = 1000;
let quantity = 3;

let subtotal = price * quantity;
let discount = subtotal * 10 / 100;
let finalAmount = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);


// Calculate gross salary and net salary
// Basic salary = 20000, Tax = 10%

let basicSalary = 20000;

let grossSalary = basicSalary;
let tax = grossSalary * 10 / 100;
let netSalary = grossSalary - tax;

console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("Net Salary:", netSalary);