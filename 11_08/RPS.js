function RPS(){
    const choices=["gu","choki","pa","invincible"];
   let handImage=""
   
let select=document.createElement("select");
choices.forEach(choice=>{
let option =document.createElement("option");
option.value=choice;
option.textContent=choice;
select.appendChild(option);
});

gameContainer.appendChild(select);

let image= document.createElement("img")
image.alt="choice"
image.style.width="200xp";
image.style.height="200xp";
switch(handImage){
case "gu":
image.src="https://d2dcan0armyq93.cloudfront.net/photo/odai/600/13500018718ec1801b8d73fc374af95a_600.jpg"
break;
case"choki":
    image.src=""
break;

case"pa":

break;

default:
break

}



gameContainer.appendChild(image);


}