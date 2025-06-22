//navigation bar
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

//for progress-bar and buttons
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const pageSlide = document.querySelector(".page-slide");
const nextBtn = document.querySelector(".nextBtn0");
const backBtnFirst= document.querySelector(".backBtn1")
const nextBtnFirst = document.querySelector(".nextBtn1");
const backBtnSecond= document.querySelector(".backBtn2")
const nextBtnSecond = document.querySelector(".nextBtn2");
const backBtnThird= document.querySelector(".backBtn3")
const nextBtnThird = document.querySelector(".nextBtn3");
const backBtnFourth= document.querySelector(".backBtn4")
const submitBtn = document.querySelector(".submit");

nextBtn.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-25%";
}

nextBtnFirst.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-50%";
}

nextBtnSecond.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-75%";
}

nextBtnThird.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-100%";
}

submitBtn.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    alert("Trip Planned Successfully");
}

backBtnFirst.onclick = function() {
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "0%";
}

backBtnSecond.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-25%";
}

backBtnThird.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-50%";
}

backBtnFourth.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    pageSlide.style.marginLeft = "-75%";
}


