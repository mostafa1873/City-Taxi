let bgHeader = document.getElementById("bgc");

window.addEventListener('scroll' , function () {
    bgHeader.classList.toggle("bg", this.scrollY > 160)
});

let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector(".navLinks");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlinks.classList.remove('open');
}