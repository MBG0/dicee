"use strict";

// const firstBtn = document.querySelector(".btn-first");
// const secondBtn = document.querySelector(".btn-second");

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage;

// var image1 = document.querySelectorAll("img")[0];
// console.log(image1);
// // image1.setAttribute("src", randomImageSource);

// firstBtn.addEventListener("click", function () {
//   image1.setAttribute("src", randomImageSource);
// });

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins!";
// } else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins!";
// } else if ((randomNumber1 = randomNumber2)) {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

const leftBtn = document.querySelector(".btn-first");
const rightBtn = document.querySelector(".btn-second");

const leftDice = document.querySelector(".dice-left");
const rightDice = document.querySelector(".dice-right");

// ! first dicee
let dice = Math.trunc(Math.random() * 6) + 1;

// ! second dicee
let dice2 = Math.trunc(Math.random() * 6) + 1;

// * first and second dice
console.log("dice: ", dice);
let randomImage = "dice" + dice + ".png";
console.log(randomImage);
let randomImageSource = "images/" + randomImage;
console.log(randomImageSource);
let image1 = document.querySelectorAll("img")[0];
console.log(image1);

leftBtn.addEventListener("click", function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  randomImage = "dice" + dice + ".png";
  randomImageSource = "images/" + randomImage;
  image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);
});

rightBtn.addEventListener("click", function () {
  // ! Loop
  dice2 = Math.floor(Math.random() * 6) + 1;
  randomImage = `dice${dice2}.png`;
  randomImageSource = "images/" + randomImage;
  image1 = document.querySelectorAll("img")[1];
  // ? display dice
  image1.setAttribute("src", randomImageSource);
});
