const myNumber = document.querySelector("#my_number");
const maxNumber = document.querySelector("#max_number");
const myButton = document.querySelector("#my_number__form");
const result = document.querySelector(".result");
const myNumberSpan = document.querySelector("#my_number__span");
const randomNumber = document.querySelector("#random_number");
const resultSpan = document.querySelector("#result_span");
const HIDDEN = "hidden";

function onPlayClick(event) {
  event.preventDefault();
  console.log("check");
  // const value = myNumber.value;
  // myNumberSpan.innerText = `${value}`;
  // result.classList.remove("hidden");
}

myButton.addEventListener("submit", onPlayClick);
