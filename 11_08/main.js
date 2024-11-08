const gameSelector =document.getElementById('game-selector');
const gameContainer =document.getElementById('game-container');

 gameContainer.textContent="ゲームを選ぶと表示されます"

gameSelector.addEventListener("change",function(){
 gameContainer.innerHTML="";
 switch(gameSelector.value){
    
    case "none":
    gameContainer.textContent="ゲームを選ぶと表示されます"
    break;
    
    case "click-counter":
        ClickCounterGame();
        break;
    
        case "number-guess":
            NumberGuessGame();
            break;
            
            case"rps":
            RPS();
            break;
 }
})

{



    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);


}



