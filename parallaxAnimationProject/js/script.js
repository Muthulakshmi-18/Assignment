var sectionContent = document.querySelector(".sectionContent");
var backImgParallax = document.querySelector(".backImgParallax");
var firstHead01 = document.querySelector(".firstHead01");
var sencondHead02 = document.querySelector(".sencondHead02");
var thridHead03 = document.querySelector(".thridHead03");

window.addEventListener("scroll", function(el){
 let value = window.scrollY;

 sectionContent.style.marginTop = value * -0.03 + "%";
 sectionContent.style.transition = "1s";

 firstHead01.style.marginTop = value * -0.02 + "%";
 firstHead01.style.transition = "1s";

 sencondHead02.style.marginTop = value * -0.0 + "%";
 sencondHead02.style.transition = "1s";

 thridHead03.style.marginTop = value * -0.0 + "%";
 thridHead03.style.transition = "1s";
});
