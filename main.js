const navEmail = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const mobilMenu = document.querySelector(".mobile-menu");
const btnmenuMovil = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

navEmail.addEventListener("click", toggleMenuEmail)
btnmenuMovil.addEventListener("click", toggleMenuMobil)
menuCarritoIcon.addEventListener("click", toogleCarritoAside)

function toggleMenuEmail(event){

    const isAsideClosed = aside.classList.contains("inactive");

    //si el mobile menu esta open, hay que cerrarlo
    if (!isAsideClosed) {
            aside.classList.add("inactive")
    }

    emailMenu.classList.toggle("inactive")
}

function toggleMenuMobil(event) {

    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobilMenu.classList.toggle("inactive")
}



function  toogleCarritoAside(event){
    const isMobilMenuClosed = mobilMenu.classList.contains("inactive");
    const emailMenuClosed = emailMenu.classList.contains("inactive");

    //si el mobile menu esta open, hay que cerrarlo
    if (!isMobilMenuClosed || !emailMenuClosed) {
        mobilMenu.classList.add("inactive")
        emailMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
    
}