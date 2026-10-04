//5. keyup Event
const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    console.log("Key released:", event.key);
});