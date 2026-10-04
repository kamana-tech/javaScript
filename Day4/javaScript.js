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
numbers.filter((num)=>{
    return num % 2 ==0
})
console.log("even numbers" +even)