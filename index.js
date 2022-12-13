"use strict";

const leftBtn = document.querySelector(".btn-first");
const rightBtn = document.querySelector(".btn-second");

const leftDice = document.querySelector(".dice-left");
const rightDice = document.querySelector(".dice-right");

// ! first dicee
let dice = Math.trunc(Math.random() * 6) + 1;

// ! second dicee
let dice2 = Math.trunc(Math.random() * 6) + 1;

// * first and second dice
let randomImage = "dice" + dice + ".png";
let randomImageSource = "images/" + randomImage;
let image1 = document.querySelectorAll("img")[0];

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
