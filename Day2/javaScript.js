// non primitive data types - to store multiple values in a single variable
// object , array and function
//Objects -stores my data type in key value pair
let student = {
    name:"kamana bohara",
    age:22,
    position:"Developer"
}
console.log(student.name)
//updating data
student.name = "sulav das"
console.log(student)
//Deleting data
delete student.position
console.log(student)



//adding additional data or property
 student.company="Cloud Nepal Web"
console.log(student)

//1. create an object that stores product information like PId, name,
// categories,price and description.The  categories property can include
//  values like electronic ,clothes brand or any other .
let product={
    PID:101,
    name:"Samsung Galaxy A16",
    categories:["electronic ","mobile"],
    price:35000,
    description:"Samsung Galaxy A16 is a modern smartphone."};
    console.log(product);