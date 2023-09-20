const hamburger = document.querySelector ('.header .nav .hamburger');
const mobile_menu = document.querySelector ('.header .nav ul');
const header = document.querySelector ('#header .main-nav');
const header_container = document.querySelector ('.header-container');
const navigation = document.querySelector ('#header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


let lastScrollY = window.scrollY;

window.addEventListener ("scroll", () => {

    if (lastScrollY < window.scrollY) {
        navigation.classList.add("nav--appear");
    } else {
        navigation.classList.remove("nav--appear");
    }

    lastScrollY = window.scrollY;

});




// document.addEventListener('scroll', () => {
//     var scroll_position = window.scrollY;
//     if(scroll_position >= 800) {
//         header_container.style.backgroundColor = "transparent";
//     } else {
//         header_container.style.backgroundColor = "white";
//     }
// });


// document.addEventListener ('scroll', ()=> {
//     var navPosition = window.scrollY;
//     if (navPosition >= 1000) {
//         navigation.style.display = "none";
//     } else {
//         navigation.style.display = "block"
//     }
// });



