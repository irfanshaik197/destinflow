let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    input.value = "Thank you! Your submission has been received!";
    input.style.width = "400px";
    input.style.backgroundColor = " rgb(77, 140, 182)";
    input.style.fontSize = "16px";
    input.style.textAlign = "center";
    btn.style.display = "none";
    input.style.color ="white";
});