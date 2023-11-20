const gridContainer = document.querySelector(".grid-container");
const resetButton = document.getElementById("reset-button");

matched = 0;
clickCount = 0;
score = 0;
click1 = null;
click2 = null;


function changePicture(object) {
  num=object.id;
  if (num == 1) {
    object.src = "img/1.jpg";
  }
  if (num == 2) {
    object.src = "img/2.jpg";
  }
  if (num == 3) {
    object.src = "img/3.jpg";
  }
  if (num == 4) {
    object.src = "img/4.jpg";
  }
  if (num == 5) {
    object.src = "img/5.jpg";
  }
  if (num == 6) {
    object.src = "img/6.jpg";
  }
  if (num == 7) {
    object.src = "img/7.jpg";
  }
  if (num == 8) {
    object.src = "img/8.jpg";
  }
  flipSquare(object);
}
function resetGame(){
  window.location.reload();
}
function flipSquare(obj){
 if (clickCount==0)
{
    click1=obj;
  clickCount++;
 }
  else if(clickCount==1&&click1!==obj)
  {
    click2=obj;
    clickCount=0;
    setTimeout(compare,500);
  }
 
}
 function compare()
 {
    if(click1.id===click2.id)
    {
      console.log("hi");
      click1.onclick=null;
      click2.onclick=null;
      click1=null;
      click2=null;
      
    }
   else
    {
      click1.src="img/q.jpg";
        click2.src="img/q.jpg";
    }
   score++;
   document.getElementById("score").innerHTML = "Score: " + score;

   {
     
   }
   
 }

