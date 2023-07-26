const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');

const menu = document.querySelector('.container-menu');
const content = document.querySelector('.container-content')


openMenu.addEventListener("click", () => {
    menu.style.display = "block";
    content.style.display = "none"
})

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    content.style.display = "flex";
})