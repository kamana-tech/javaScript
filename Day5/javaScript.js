//array-it is an ordered collection of datas with index position
let fruits=["apple","banana","Orange","mango"]
console.log(fruits[0])

//adding extra data using index
fruits[4]="Guava"
console.log(fruits)

//updating  the data 
fruits[0]="grapes"
console.log(fruits)

//Deleting the data
delete fruits[3]


fruits.push("Pineapple")
console.log(fruits)


fruits.pop()
console.log(fruits)

fruits.unshift("watermelon")
console.log(fruits)

fruits.shift()

// map and filter
//map is used when we need to change every element in a given array.
//example
let numbers = [1, 2, 3, 4, 5]
numbers.map((num)=> {
    console.log(num*num)
})
let even = numbers.filter((num)=>{
    return num % 2 == 0
})
console.log("even numbers" +even)