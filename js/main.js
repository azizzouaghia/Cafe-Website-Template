import { carouselCoffee,carouselDrinks,carouselHookah } from "./carousel.js";



// Choose From Ends
let choose = document.querySelectorAll(".chooseFrom ul li");        
let currentactive;
let carouselInfo;
if(window.localStorage.getItem("choose")){ //Check The LocalStorage
currentactive=window.localStorage.getItem("choose"); //Active Carousel
choose.forEach((li)=>{li.classList.remove("active");});
document.getElementById(`${window.localStorage.getItem("choose")}`).classList.add("active"); //Display Active 
}else {currentactive="coffee";}
carouselInfo='';
function changeCarousel() { //Change Carousel Function
    document.getElementById(`coffeecarousel`).innerHTML="";
    document.getElementById(`drinkscarousel`).innerHTML="";
    document.getElementById(`hookahcarousel`).innerHTML="";
switch (currentactive) { 
    case "coffee": carouselInfo=carouselCoffee;
        break;
    case "drinks": carouselInfo=carouselDrinks;
        break;
    case "hookah": carouselInfo=carouselHookah;
        break;    
}
document.getElementById(`${currentactive}carousel`).innerHTML=carouselInfo;
} 

changeCarousel();

choose.forEach((li)=>{
li.addEventListener("click",(e)=>{ //Add The Active Class
    choose.forEach((li)=> {
        li.classList.remove("active");
    })
    window.localStorage.setItem("choose",e.currentTarget.id);
    currentactive=window.localStorage.getItem("choose");
    carouselInfo='';
    changeCarousel();
    console.log(carouselInfo);
    document.getElementById(`${currentactive}carousel`).style.removeProperty("display");//Display Active Carousel
    e.currentTarget.classList.add("active"); //Add propertie Active To The Choose

})})
//Choose From Ends



//Reviews Start
let rev1 = document.getElementById("rev1");
let rev2 = document.getElementById("rev2");
let rev3 = document.getElementById("rev3");
document.getElementById("revb1").onclick=()=> {
    document.getElementById("revb1").classList.add("active");
    document.getElementById("revb2").classList.remove("active");
    document.getElementById("revb3").classList.remove("active");
rev1.style.display='block';
rev2.style.display='none';
rev3.style.display='none';
}
document.getElementById("revb2").onclick=()=> {
    document.getElementById("revb1").classList.remove("active");
    document.getElementById("revb2").classList.add("active");
    document.getElementById("revb3").classList.remove("active");
rev1.style.display='none';
rev2.style.display='block';
rev3.style.display='none';
}
document.getElementById("revb3").onclick=()=> {
    document.getElementById("revb1").classList.remove("active");
    document.getElementById("revb2").classList.remove("active");
    document.getElementById("revb3").classList.add("active");
rev1.style.display='none';
rev2.style.display='none';
rev3.style.display='block';
}
//Reviews Ends



//To Top Starts
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";}}
mybutton.onclick =()=>{
    window.scrollTo(0,0);
}
//To Top Ends
