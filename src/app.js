/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let stick = ["♣", "♠", "♥", "♦"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let stickRandom = stick[Math.floor(Math.random() * stick.length)];
  let numberRandom = number[Math.floor(Math.random() * number.length)];
  console.log(stickRandom);
  console.log(numberRandom);
  document.getElementById("top").innerHTML = stickRandom;
  document.getElementById("number").innerHTML = numberRandom;
  document.getElementById("bottom").innerHTML = stickRandom;

  if (stickRandom === "♥" || stickRandom === "♥") {
    document.getElementById("top").style.color = "red";
    document.getElementById("number").style.color = "red";
    document.getElementById("bottom").style.color = "red";
  } else {
    document.getElementById("top").style.color = "black";
    document.getElementById("number").style.color = "black";
    document.getElementById("bottom").style.color = "black";
  }
};
