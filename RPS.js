function RPS(){
    const choices=["gu","choki","pa","invincible"];
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
choices.forEach(choice=>{
let option =document.createElement("option");
option.value=choice;
option.textContent=choice;
select.appendChild(option);
});
//forEach 配列など複数のデータがあるもの使える。全部やる関数
//配列.forEach(配列の中身=> {命令})
gameContainer.appendChild(select);

let image=document.createElement("img");
image.alt="Choice";
image.style.width="300px";
image.style.height="300px";
image.src="https://d2dcan0armyq93.cloudfront.net/photo/odai/600/13500018718ec1801b8d73fc374af95a_600.jpg"
gameContainer.appendChild(image);

let image=document.createElement("img");
image.alt="Choice";
image.style.width="300px";
image.style.height="300px";
image.src="https://d2dcan0armyq93.cloudfront.net/photo/odai/600/3d4673b05f5c9c049c8079f9a3eb0d68_600.jpg"
gameContainer.appendChild(image);
}