var sideMenubar = document.querySelector(".zaskNavbar");
var optionTag = document.querySelector(".optionTag");
var body = document.querySelector("body");
var animation = document.querySelector(".Animation-container");
var inputCheckIN = document.querySelector("#inputCheckIN");
var lightStyle =  document.querySelector("#lightStyle");
var darkstyle = document.querySelector("#darkstyle");

function fliterDisplay(){
 sideMenubar.style.display = "block";
}
function fliterHide(){
 sideMenubar.style.display = "none";
}

function optionTagShow(){
 optionTag.style.display = "block";
}
// function optionTagHide(){
//  selectIcon.style.display = "none";
// }

function animetionHide(){
 animation.style.display = "block";
 if(animation.style.display = "block"){
  animation.style.position = "fixed";
  body.style.overflow = "hidden";
 }
 setTimeout(loadingTime, 4000);
}

function loadingTime(){
 animation.style.display = "none";
 if(animation.style.display = "none"){
  body.style.overflow = "visible";
 }
}

function checkIn(){
 if(inputCheckIN.checked == true ){
  // console.log("hi")
  lightStyle.removeAttribute("disabled", true);
  darkstyle.setAttribute("disabled", false)
 }else{
  lightStyle.setAttribute("disabled", true);
  darkstyle.removeAttribute("disabled", false)
 }
}
