function RPS(){
    const choices=["gu","choki","pa"];
    let handImage=""
    //この書き方は、配列　C言語参照

    // let select=document.createElement("select");
    // let option1 =document.createElement("option")
    // let option2 =document.createElement("option")
    // let option3 =document.createElement("option")
     // const gu="gu"
    // option1.value=gu;
    // option1.textContent=gu;
    // select.appendChild(option1);
    // const choki="choki"
    // option2.value=choki;
    // option2.textContent=choki;
    // select.appendChild(option2);
    // const pa="pa"
    // option3.value=pa;
    // option3.textContent=pa;
    // select.appendChild(option3);
    // gameContainer.appendChild(select);
let select=document.createElement("select");
select.id="choices"
choices.forEach(choice=>{
let option =document.createElement("option");
option.value=choice;
option.textContent=choice;
option.id=choice;
select.appendChild(option);
});

gameContainer.appendChild(select);
let choiceButton=document.createElement("button")
choiceButton.textContent="決定"


gameContainer.appendChild(choiceButton);

let image= document.createElement("img");
image.alt="choice";
image.style.width="60xp";
image.style.height="50xp";

let enemyImage= document.createElement("img");
enemyImage.alt="choice";
enemyImage.style.width="60xp";
enemyImage.style.height="50xp";

choiceButton.addEventListener("click",function(){
   
    switch(select.value){
        case "gu":
image.src="https://pbs.twimg.com/media/GPD2XdUawAAIy1O.jpg"
    break;

case"choki":
    image.src="https://pbs.twimg.com/media/DMkyTM5VQAA01Cj.jpg"
    
    
    break;

case"pa":
 image.src="https://pbs.twimg.com/media/GUISwZtaYAAmYB_.jpg:large"

    break;

default:
    break;
 }

 let enemyHand=choices[Math.floor(Math.random()*choices.length)];

switch(enemyHand){
    case "gu":
enemyImage.src="https://pbs.twimg.com/media/GPD2XdUawAAIy1O.jpg"
break;

case"choki":
enemyImage.src="https://pbs.twimg.com/media/DMkyTM5VQAA01Cj.jpg"


break;

case"pa":
enemyImage.src="https://pbs.twimg.com/media/GUISwZtaYAAmYB_.jpg:large"

break;

default:
break;
}
})

gameContainer.appendChild(image);
gameContainer.appendChild(enemyImage);
}

