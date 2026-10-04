/operator
//symbol used to perform operation like addition, substraction etc
//arithmetic operators
console.log(10+10)
console.log(4-3)
console.log(10/10)
console.log(10*5)
console.log(10%10)
//logical operator(logical or, logical not, logical and)
console.log(10>11 || 11>10) // F or T = T --logical or
console.log(10>11 || 11>10) // F or T =F ---logical and
console.log(!true) // logical not
//assignment operator
let x=5
x +=10
x =+5
console.log(x)

//comparison operators 
let a = 20
console.log(10==10)
console.log(10=="10")
console.log(10==="10")


//ternary operators 
//condition? "true" : "false"
let age=22;
 let result = age > 18 ? "eligible to vote" : " not eligible"
 console.log(result)
 // wap using ternary to check is user is passed.
 let marks = 45;

let Result = marks >= 40 ? "Passed :)" : "Failed :(";

console.log(Result);
 
// calculate  subtotal and discount of a product with price and quantity.use 10% discount .

let price = 1000;
let quantity = 3;

let subtotal = price * quantity;
let discount = subtotal * 10 / 100;
let finalAmount = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//calculate gross salary and net salary of employee with 10% tax assume basic salary as 20000

let basicSalary = 20000;

let grossSalary = basicSalary;
let tax = grossSalary * 10 / 100;
let netSalary = grossSalary - tax;

console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("Net Salary:", netSalary);