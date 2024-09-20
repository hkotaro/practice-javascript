
function changeColor(){
document.getElementById("text").style.color="red";
}
//document.getElementById("Text").style.color="red";
    /*これは、ドキュメントの中の[text]というIDを持っている
    　タグのスタイルの色を赤色にしてください */
    let count=0;
    function increaseCount(){
   
    count++;
    document.getElementById("counter").innerText=count;
    }
   
    function heraseCount(){
   
    count--;
    document.getElementById("counter").innerText=count;

}
