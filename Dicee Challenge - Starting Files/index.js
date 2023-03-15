var randomNumber1 = Math.floor(Math.random()*6)+1;//This gives A random number 1-6
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImageSrc = "images/"+randomDiceImage1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 ="images/dice"+randomNumber2+".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Annamma Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Sunny Wins";
}
else{
    document.querySelector("h1").innerHTML="Tie..!"
}