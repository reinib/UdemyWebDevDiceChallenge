// create random numbers between 1 - 6
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

// create image source string
var randImgSrc1 = "images/dice" + randNum1 + ".png";
var randImgSrc2 = "images/dice" + randNum2 + ".png";

// insert image source into img tag
var randImg1 = document.querySelectorAll("img")[0];
var img1 = randImg1.setAttribute("src", randImgSrc1);
var randImg2 = document.querySelectorAll("img")[1];
var img2 = randImg2.setAttribute("src", randImgSrc2);

// display winner in h1 tag
if(randNum1 === randNum2){
  document.querySelector("h1").innerText = "It's a tie! Play again!";
}
else if(randNum1 > randNum2){
  document.querySelector("h1").innerText = "Player One Wins!";
}else{
  document.querySelector("h1").innerText = "Player Two Wins!";
}
