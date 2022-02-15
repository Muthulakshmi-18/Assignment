var ellipsName = document.querySelector(".ellipsName");
var zohoCliqContentsApp = document.querySelector(".zohoCliqContentsApp");
var cliqRemoteMainArea = document.querySelector(".cliqRemoteMainArea");
function openChatBox(){
 var creatDiv = document.createElement("div");
 creatDiv.className = "kaviyaChatWindow";
 cliqRemoteMainArea.append(creatDiv);
 zohoCliqContentsApp.style = "display:none";
}