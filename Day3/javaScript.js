/*3. Store a customer's food delivery order.
Print the customer's name.
Print the restaurant name.
Print the name of the first food item.*/



let order = {
    customerName: "kamana bohara",
    restaurantName: "Roots N Fruits House",
    foodItems: ["Pizza", "Samosa", "Momo"]
};

// Print customer's name
console.log("Customer Name:", order.customerName);

// Print restaurant name
console.log("Restaurant Name:", order.restaurantName);

// Print the name of the first food item
console.log("First Food Item:", order.foodItems[0]);