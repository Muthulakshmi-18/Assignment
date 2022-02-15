var timeLine = [];

var container = document.querySelector(".container");
var body = document.querySelector("body");
var line = document.querySelector(".line01");
var tooltiptext = document.querySelector(".tooltiptext");
var leftValue = 0;
var lineCopy = document.createElement("div");
var inputBox = document.querySelector(".inputBox");
var inputTimeLineHour = document.querySelector(".timeLineHour");
var intervel;

function clickButton(){
 var a = inputTimeLineHour.value * 1000;
 var move = a / innerWidth;
 intervel = setInterval(lineMoveFun, move);
}

function lineMoveFun() {
 leftValue += 1;
 var containerTime = (leftValue / innerWidth) * inputTimeLineHour.value;
 var clicklineTime = containerTime.toFixed(2);
 tooltiptext.innerHTML = clicklineTime;

 if (leftValue >= innerWidth || inputTimeLineHour.value == "") {
  clearInterval(intervel);
  console.log("done");
 }

 line.style.left = leftValue + "px";
 for (var i = 0; i <= timeLine.length; i++) {
  if (leftValue == timeLine[i]) {
   console.log("TaksCompleted");
   var styleLineCopy = document.getElementsByClassName("lineCopyDiv")[i];
   styleLineCopy.style.backgroundColor = "gray";
   var styleInput = document.getElementsByClassName("tollTipDiv")[i];
   styleInput.value = "TaksCompleted";
  }
 }
}

function clickEvent(ele) {
 var lineCopy = document.createElement("div");
 lineCopy.className = "lineCopyDiv";
 container.appendChild(lineCopy);
 lineCopy.style.marginLeft = ele.x + "px";

 var creatInput = document.createElement("input");
 creatInput.className = "tollTipDiv";
 body.appendChild(creatInput);
 creatInput.style.marginLeft = ele.x + "px";
 var windowWidth = (ele.x / innerWidth) * inputTimeLineHour.value;
 var clickline = windowWidth.toFixed(2);
 creatInput.value = clickline;
 timeLine.push(ele.x);
 console.log(timeLine);
}
