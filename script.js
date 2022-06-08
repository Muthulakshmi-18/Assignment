var ticBoxes = document.querySelectorAll(".tic"); 
var ResultPage = document.querySelector(".ResultPage");
var tryagain = document.querySelector(".tryagain");
var tiktoktoeGame = document.querySelector(".tiktoktoeGame");

for(let i = 0; i < ticBoxes.length; i++){
 function muthu(){
  var player1 = document.querySelector(".player1");
  var player2 = document.querySelector(".player2");
  var playersBtn = document.querySelector(".playersBtn");
  var headTag = document.querySelector(".head");

  if(playersBtn.innerHTML == "Player1(O)"){
   ticBoxes[i].innerHTML = "O";
   player1.classList.remove("playersBtn");
   player2.classList.add("playersBtn");
  }else{
   ticBoxes[i].innerHTML = "X";
   player1.classList.add("playersBtn");
   player2.classList.remove("playersBtn");
  }

  //****************** Horizontal *******************/
  if(ticBoxes[0].innerHTML == "" && ticBoxes[1].innerHTML  == "" && ticBoxes[2].innerHTML  == ""){
  }
  else if(ticBoxes[0].innerHTML == ticBoxes[1].innerHTML  && ticBoxes[1].innerHTML  == ticBoxes[2].innerHTML  && ticBoxes[2].innerHTML  == ticBoxes[0].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[3].innerHTML == "" && ticBoxes[4].innerHTML  == "" && ticBoxes[5].innerHTML  == ""){
  }
  else if(ticBoxes[3].innerHTML == ticBoxes[4].innerHTML  && ticBoxes[4].innerHTML  == ticBoxes[5].innerHTML  && ticBoxes[5].innerHTML  == ticBoxes[3].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[6].innerHTML == "" && ticBoxes[7].innerHTML  == "" && ticBoxes[8].innerHTML  == ""){
  }
  else if(ticBoxes[6].innerHTML == ticBoxes[7].innerHTML  && ticBoxes[7].innerHTML  == ticBoxes[8].innerHTML  && ticBoxes[8].innerHTML  == ticBoxes[6].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }

  //****************** Vertical *******************/ 
  else if(ticBoxes[0].innerHTML == "" && ticBoxes[3].innerHTML  == "" && ticBoxes[6].innerHTML  == ""){
  }
  else if(ticBoxes[0].innerHTML == ticBoxes[3].innerHTML  && ticBoxes[3].innerHTML  == ticBoxes[6].innerHTML  && ticBoxes[6].innerHTML  == ticBoxes[0].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[1].innerHTML == "" && ticBoxes[4].innerHTML  == "" && ticBoxes[7].innerHTML  == ""){
  }
  else if(ticBoxes[1].innerHTML == ticBoxes[4].innerHTML  && ticBoxes[4].innerHTML  == ticBoxes[7].innerHTML  && ticBoxes[7].innerHTML  == ticBoxes[1].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[2].innerHTML == "" && ticBoxes[5].innerHTML  == "" && ticBoxes[8].innerHTML  == ""){
  }
  else if(ticBoxes[2].innerHTML == ticBoxes[5].innerHTML  && ticBoxes[5].innerHTML  == ticBoxes[8].innerHTML  && ticBoxes[8].innerHTML  == ticBoxes[2].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  //****************** Cross *******************/
  else if(ticBoxes[0].innerHTML == "" && ticBoxes[4].innerHTML  == "" && ticBoxes[8].innerHTML  == ""){
  }
  else if(ticBoxes[0].innerHTML == ticBoxes[4].innerHTML  && ticBoxes[4].innerHTML  == ticBoxes[8].innerHTML  && ticBoxes[8].innerHTML  == ticBoxes[0].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[2].innerHTML == "" && ticBoxes[4].innerHTML  == "" && ticBoxes[6].innerHTML  == ""){
  }
  else if(ticBoxes[2].innerHTML == ticBoxes[4].innerHTML  && ticBoxes[4].innerHTML  == ticBoxes[6].innerHTML  && ticBoxes[6].innerHTML  == ticBoxes[2].innerHTML){
   ResultPage.style = "display:block";
   var winner = (ticBoxes[0].innerHTML == "O") ? "Player 1 win" : "Player 2 win";
   headTag.innerHTML = winner;
   // console.log("Your Win....!!");
  }
  else if(ticBoxes[0].innerHTML && ticBoxes[1].innerHTML && ticBoxes[2].innerHTML &&ticBoxes[3].innerHTML && ticBoxes[4].innerHTML && ticBoxes[5].innerHTML && ticBoxes[6].innerHTML && ticBoxes[7].innerHTML && ticBoxes[8].innerHTML != " "){
   headTag.innerHTML = "Draw";
   ResultPage.style = "display:block";
  }
 }
 ticBoxes[i].addEventListener("click",muthu);
}

function reload(){
 ResultPage.style = "display : none";
 location.reload();
}

function userchoi01(){
 var clickBtn01 = document.querySelector(".player1")
 clickBtn01.classList.add("playersBtn");
 tiktoktoeGame.style = "display : none";
}

function userchoi02(){
 var clickBtn02 = document.querySelector(".player2")
 clickBtn02.classList.add("playersBtn");
 tiktoktoeGame.style = "display : none";
}