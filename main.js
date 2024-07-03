let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
if(window.scrollY> 0){
    document.querySelector(".header").classList.add("active")
}else{
    document.querySelector(".header").classList.remove("active")

}


    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// حتي بما اعمل ريفريش يفضل با الوضع اللي سبته عليه
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")

    }


  
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}
var home = document.getElementById("home")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modellx")
var my = document.getElementById("modely")
var mo = document.getElementById("model")

ms.onclick=function(){
    home.style.backgroundImage ="url(img/image-2.png)"
    mo.innerHTML="Model S"
   on.innerHTML="1.9 S"
   onn.innerHTML="200"

}
m3.onclick = function () {
    home.style.backgroundImage = "url(img/image-1.png)"
    mo.innerHTML = "Model 3"
    on.innerHTML = "1.6 S"
    onn.innerHTML = "300"

}
mx.onclick = function () {
    home.style.backgroundImage = "url(img/image-3.png)"
    mo.innerHTML = "Model X"
    on.innerHTML = "1.5 S"
    onn.innerHTML = "100"

}
my.onclick = function () {
    home.style.backgroundImage = "url(img/image-4.png)"
    mo.innerHTML = "Model Y"
    on.innerHTML = "1.4 S"
    onn.innerHTML = "400"

}

// slider one
var swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// slider tow
var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// slide2
var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
