const input = document.getElementById("input");
const message = document.getElementById("message");

input.addEventListener("input", () => {
    message.innerText = "Characters: " + input.value.length;
});