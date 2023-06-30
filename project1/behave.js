
var randomNumber=Math.floor(Math.random()*5)+1;
var image1=document.querySelectorAll("img")[0];
var random ="dice"+randomNumber+".png";
image1.setAttribute("src",random);
var randomNumber2=Math.floor(Math.random()*5)+1;
var image2=document.querySelectorAll("img")[1];
var random2="dice"+randomNumber2+".png";
image2.setAttribute("src",random2)
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="First Player Wins"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Second Player Wins"
}
else{
    document.querySelector("h1").innerHTML="It's a Stalemate"
}