const image = document.getElementById("cat");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    if (image.style.display == "none") {
        // show image
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        // hide image
        image.style.display = "none";
        button.textContent = "show";
    }
});



