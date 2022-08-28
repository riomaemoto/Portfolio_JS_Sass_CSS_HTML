const menu_btn = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

menu_btn.addEventListener("click", function () {
    line1.classList.toggle("open");
    line2.classList.toggle("open");
    line3.classList.toggle("open");
    menu_btn.classList.toggle("open");
    nav_links.classList.toggle("open");
});



