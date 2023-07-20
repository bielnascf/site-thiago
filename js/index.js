const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');

const menu = document.querySelector('.container-menu');


openMenu.addEventListener("click", () => {
    menu.style.display = "block";
})

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
})