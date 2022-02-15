function clickme(){
    var creatDiv =  document.createElement("div");
    creatDiv.className = "boxes";
    var find = document.querySelector('.content');
    find.appendChild(creatDiv);
    var roundNum = Math.round(Math.random()*10);
    creatDiv.innerHTML = roundNum;
    creatDiv.setAttribute("target", roundNum);
    creatDiv.addEventListener("click", function(){myName(this);})
}
function myName(ele){
    let isOdd = ele.getAttribute("target");
    var text;
    if (isOdd % 2 == 0){
        text = document.querySelector("#odd");
    }else{
        text = document.querySelector("#even");
    }
    text.appendChild(ele)
}