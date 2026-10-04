/* Qno2
 2.Real-world scenario: Create a simple bank account system.

Print the account holder's name.
Add branch property.
Add isActive property.
Display the final account balance.*/

let bankAccount = {
    accountHolder: "kamana bohara",
    balance: 350000
};


console.log("Account Holder:", bankAccount.accountHolder);


bankAccount.branch = "Dhangadhi";

bankAccount.isActive = true;

console.log("Final Account Balance:", bankAccount.balance);