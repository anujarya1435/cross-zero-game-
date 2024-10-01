let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newbtn");
let newcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;// playerX, playerO
const winnerpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame =()=>{
    turnO=true;
enableBoxes();
newcontainer.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click" ,()=>{
        console.log("clicked on the boxes");
        if(turnO){//player O

            box.innerText="O";
            box.style.color="black";
            turnO=false;
        }
        else{//player X
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWineer();
    });
}
);
const disableBoxes = () => {
for(let box of boxes){
    box.disabled= true;
}
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
    }
const showwinner =(winner)=>{
    msg.innerText=`Congrulations, Winner is ${winner}`;
    newcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWineer =()=>{
    for(let pattern of winnerpatterns){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner" ,pos1val);
                showwinner(pos1val);
            }
        }
    }
}
newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);