const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.getElementsByTagName("ul")[0];
const showhide = document.getElementById("showhide-btn");
const remove = document.getElementById("remove");

button.addEventListener("click", () => {
    // create new html element, store in memory
    let item = document.createElement("li");
    // when created element has properties, set 
    // textContent before we render to screen
    item.textContent = input.value;
    // appendChild to parent node list
    list.appendChild(item);

    item.addEventListener("click", () =>{
        list.removeChild(item);
    });
    item.addEventListener("mouseover", () => {
        item.textContent = item.textContent.toUpperCase();
    });
    item.addEventListener("mouseout", () => {
        item.textContent = item.textContent.toLowerCase();
    });

    input.value = "";
});



remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    list.removeChild(lastItem);
});

showhide.addEventListener("click", () => {
    if (list.style.display == "none") {
        // show list
        list.style.display = "block";
        showhide.textContent = "hide";
    } else {
        // hide list
        list.style.display = "none";
        showhide.textContent = "show";
    }
});

const startingList = document.getElementsByTagName("li");
for (let listItem of startingList) {
    listItem.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
    });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
    });
}