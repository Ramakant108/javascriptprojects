          // ->create computerchoise function

function computerchoise(){
  let choise=['rock','Papper','Seissor'];
  let computerchoise=choise[ Math.floor(Math.random() * 3)]
  return computerchoise
}

function getscore(playerchoise,computerchoise)
  {
    let score;
    if (playerchoise===computerchoise()){
      score=0;
    }
    else if (playerchoise==="rock" && computerchoise()==="Seissor")
    {
      score=1
    }
    else if (playerchoise==="Papper" && computerchoise()==="rock")
    {
      score=1
    }
    else if (playerchoise==="Seissor" && computerchoise()==="Papper")
    {
      score=1
    }
    else{
      score=-1;
    }
    return score
  }


function showresult(score,playerchoise,computerchoise)
  {

    let Result=document.getElementById("result")
    
    
    switch(score) {
  case 0:
         Result.innerText=`drow"`  
  break;
  case 1:
         Result.innerText=`you win`
  break;
  case -1:
        Result.innerText=`you lose`
   break;
   default:
    // code block
}
    let s=document.getElementById("player-score")
    let hands=document.getElementById("hands")
   s.innerText=`${Number(s.innerText)+score}`
   hands.innerText=`${playerchoise} vs ${computerchoise()}`
    console.log(s.innerText)
    console.log(hands.innerText)
  }
function rpcbutton(playerchoise){
  const score=getscore(playerchoise.value,computerchoise)
  showresult(score,playerchoise.value,computerchoise)
}
function Game(){
  let rbc=document.querySelectorAll(".rpsButton")
  rbc.forEach(rbcb=>{
    rbcb.onclick=()=>rpcbutton(rbcb)
  })
 let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

Game()