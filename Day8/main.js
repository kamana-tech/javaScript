// console.log(window.document.body)

// selection methods
// getElementById
// getElementsByClassName
// getElementsByTagName

//let ele = document.getElementsByTagName("h1")
//console.log(ele[0])

//ele[0].innerText = "Recent flood incident in Nepal";

// password validation .display error if password length is
// less than 8

// Password validation
// Display error if password length is less than 8

let password = prompt("Enter your password");

if (password.length < 8) {
    alert("Error: Password must be at least 8 characters long");
} else {
    alert("Password is valid");
}