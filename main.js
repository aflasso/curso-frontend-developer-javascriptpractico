const navEmail = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const mobilMenu = document.querySelector(".mobile-menu");
const btnmenuMovil = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

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

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement("figure")
        const productImgCard = document.createElement("img")
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)