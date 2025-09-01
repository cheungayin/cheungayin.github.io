// // define our variables
// let toggleMenu = document.querySelector(".mobile-menu");
// let headerStatus = document.querySelector(".header");

// // when user clicks on "menu", open and close the mobile navigation
// toggleMenu.addEventListener( "click", () => {
//     if (headerStatus.classList.contains("open")) {
//         headerStatus.classList.remove("open");
//     }
//     else{
//         headerStatus.classList.add("open");
//     }
// },
// false,
// );

//FILTER!!!

// default show all items on load
filterSelection("all");
function filterSelection(category) {
    const items = document.getElementsByClassName("filter");
    for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");

    if (category === "all" || items[i].classList.contains(category)) {
        items[i].classList.add("show");
    }
    }
}

// add active class to the current button
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
    const current = btnContainer.querySelector(".active");
    if (current) current.classList.remove("active");
    this.classList.add("active");
    });
}