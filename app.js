var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var $small_time=document.getElementsByClassName("time_small")[0];//getting small_time element
var $big_time=document.getElementsByClassName("time_big")[0];//getting the big time
var $day=document.getElementsByClassName("day")[0];//getting the date element
var $chat=document.getElementsByClassName("chat")[0];//getting that chat icon element
var $new_screen=document.getElementsByClassName("time_day")[0];//getting the first time_day element
var $img=document.getElementsByClassName("images")[0];//getiing the images tag
var $screen2=document.getElementsByClassName("screen2")[0];//getiing the second screen
var $next_screen=document.createElement("div");//creating new element to replace the previous screen when clicking 
var $next_screen2=document.createElement("div");//creating new element to replace the previous screen when clicking 
var $msg1=document.createElement("div");//creating new element to replace the previous element when clicking 
var $msg2=document.createElement("div");//creating new element to replace the previous element when clicking 
var $msg3=document.createElement("div");//creating new element to replace the previous element when clicking 
$msg1.textContent="C";
$msg2.textContent="Java";
$msg3.textContent="Python";

var d=new Date();//getting date object 
$small_time.innerHTML=d.getHours()+":"+d.getMinutes();
$big_time.innerHTML=d.getHours()+":"+d.getMinutes();
$day.innerHTML=day_list[d.getDay()]

var v=0;//shows which screen that you are in and screen replacement is based on this variable.
$chat.addEventListener("click",myfun);//when clicking chat icon
function myfun(){
    if(v===0){
    $chat.style.color="red";
    $new_screen.replaceWith($next_screen)//replace default screen with the newly created screen1
    $next_screen.classList.add("screen3")//add class to that screen
    $next_screen.append($msg1)//appending msg element
    $next_screen.append($msg2)//appending msg element
    $next_screen.append($msg3)//appending msg element
    v=2   //if v is set 2 means when u click on chat icon it will replace screen to default screen
}
   else if(v==1){
       $next_screen2.replaceWith($next_screen);//if we are in scrren1 then replace sceeen1 with screen2 when clicking msg on screen1
       $next_screen.classList.add("screen3")
       $next_screen.append($msg1)
       $next_screen.append($msg2)
       $next_screen.append($msg3)
       v=2 
   }
   else{
    $next_screen.replaceWith($new_screen);//if v=2 then setting screen to default 
    $chat.style.color="white";
    v=0;
   }
}
$msg1.addEventListener("click",function(){ //msg 1 clicked
    myfun1(0)
});
$msg2.addEventListener("click",function(){   //msg 2 clicked
    myfun1(1)
});
$msg3.addEventListener("click",function(){   //msg 3 clicked
    myfun1(2)
});

function myfun1(val){
    $next_screen.replaceWith($next_screen2) //when click msg on screen1 it change it screen to 2
    $next_screen2.classList.add("screen4")//add class to screen and styles
    $next_screen2.style.padding="6px"
    $next_screen2.style.fontSize="13px"
    if(val==0){
    $next_screen2.innerHTML="C is the mother of all programming language and it is a structure based language."
    }
    else if(val==1){
        $next_screen2.innerHTML="Java is a strongly typed object oriented programming language and its very powerful";
    }
    else{
        $next_screen2.innerHTML="Python is a interpreted based language and its easy to learn and its the best developing language"
    }
    v=1;//tells thst u r currently in screen2
}



