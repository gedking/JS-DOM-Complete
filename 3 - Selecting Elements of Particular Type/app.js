const list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
    if (list[i].className != "not-orange"){
        list[i].style.color = "orange";
    }
}