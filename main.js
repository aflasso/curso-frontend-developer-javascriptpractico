const navEmail = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", menuEmail)

function menuEmail(event){
    emailMenu.classList.toggle("inactive")
}