/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
document.addEventListener("DOMContentLoaded", () => {
  const suits = ["hearts", "spades", "clubs", "diamonds"];
  const values = [
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
    "K",
    "A"
  ];
  const suitSymbols = {
    hearts: "♥",
    spades: "♠",
    clubs: "♣",
    diamonds: "♦"
  };

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const topSuit = document.getElementById("top-suit");
  const bottomSuit = document.getElementById("bottom-suit");
  const cardValue = document.getElementById("card-value");

  topSuit.textContent = suitSymbols[randomSuit];
  bottomSuit.textContent = suitSymbols[randomSuit];
  cardValue.textContent = randomValue;

  if (randomSuit === "hearts" || randomSuit === "diamonds") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    cardValue.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
    cardValue.style.color = "black";
  }
});
