const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    if (input.value != "") {
        image.src = input.value;
    }
});